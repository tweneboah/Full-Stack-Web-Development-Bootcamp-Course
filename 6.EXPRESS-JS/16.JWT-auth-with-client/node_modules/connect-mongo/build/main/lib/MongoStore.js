"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const util_1 = __importDefault(require("util"));
const session = __importStar(require("express-session"));
const mongodb_1 = require("mongodb");
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('connect-mongo');
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
const unit = (a) => a;
function defaultSerializeFunction(session) {
    // Copy each property of the session to a new object
    const obj = {};
    let prop;
    for (prop in session) {
        if (prop === 'cookie') {
            // Convert the cookie instance to an object, if possible
            // This gets rid of the duplicate object under session.cookie.data property
            // @ts-ignore FIXME:
            obj.cookie = session.cookie.toJSON
                ? // @ts-ignore FIXME:
                    session.cookie.toJSON()
                : session.cookie;
        }
        else {
            // @ts-ignore FIXME:
            obj[prop] = session[prop];
        }
    }
    return obj;
}
function computeTransformFunctions(options) {
    if (options.serialize || options.unserialize) {
        return {
            serialize: options.serialize || defaultSerializeFunction,
            unserialize: options.unserialize || unit,
        };
    }
    if (options.stringify === false) {
        return {
            serialize: defaultSerializeFunction,
            unserialize: unit,
        };
    }
    // Default case
    return {
        serialize: JSON.stringify,
        unserialize: JSON.parse,
    };
}
class MongoStore extends session.Store {
    constructor({ collectionName = 'sessions', ttl = 1209600, mongoOptions = {}, autoRemove = 'native', autoRemoveInterval = 10, touchAfter = 0, stringify = true, crypto, ...required }) {
        super();
        this.crypto = null;
        debug('create MongoStore instance');
        const options = {
            collectionName,
            ttl,
            mongoOptions,
            autoRemove,
            autoRemoveInterval,
            touchAfter,
            stringify,
            crypto: {
                ...{
                    secret: false,
                    algorithm: 'aes-256-gcm',
                    hashing: 'sha512',
                    encodeas: 'base64',
                    key_size: 32,
                    iv_size: 16,
                    at_size: 16,
                },
                ...crypto,
            },
            ...required,
        };
        // Check params
        (0, console_1.assert)(options.mongoUrl || options.clientPromise || options.client, 'You must provide either mongoUrl|clientPromise|client in options');
        (0, console_1.assert)(options.createAutoRemoveIdx === null ||
            options.createAutoRemoveIdx === undefined, 'options.createAutoRemoveIdx has been reverted to autoRemove and autoRemoveInterval');
        (0, console_1.assert)(!options.autoRemoveInterval || options.autoRemoveInterval <= 71582, 
        /* (Math.pow(2, 32) - 1) / (1000 * 60) */ 'autoRemoveInterval is too large. options.autoRemoveInterval is in minutes but not seconds nor mills');
        this.transformFunctions = computeTransformFunctions(options);
        let _clientP;
        if (options.mongoUrl) {
            _clientP = mongodb_1.MongoClient.connect(options.mongoUrl, options.mongoOptions);
        }
        else if (options.clientPromise) {
            _clientP = options.clientPromise;
        }
        else if (options.client) {
            _clientP = Promise.resolve(options.client);
        }
        else {
            throw new Error('Cannot init client. Please provide correct options');
        }
        (0, console_1.assert)(!!_clientP, 'Client is null|undefined');
        this.clientP = _clientP;
        this.options = options;
        this.collectionP = _clientP.then(async (con) => {
            const collection = con
                .db(options.dbName)
                .collection(options.collectionName);
            await this.setAutoRemove(collection);
            return collection;
        });
        if (options.crypto.secret) {
            this.crypto = require('kruptein')(options.crypto);
        }
    }
    static create(options) {
        return new MongoStore(options);
    }
    setAutoRemove(collection) {
        const removeQuery = () => ({
            expires: {
                $lt: new Date(),
            },
        });
        switch (this.options.autoRemove) {
            case 'native':
                debug('Creating MongoDB TTL index');
                return collection.createIndex({ expires: 1 }, {
                    background: true,
                    expireAfterSeconds: 0,
                });
            case 'interval':
                debug('create Timer to remove expired sessions');
                this.timer = setInterval(() => collection.deleteMany(removeQuery(), {
                    writeConcern: {
                        w: 0,
                        j: false,
                    },
                }), this.options.autoRemoveInterval * 1000 * 60);
                this.timer.unref();
                return Promise.resolve();
            case 'disabled':
            default:
                return Promise.resolve();
        }
    }
    computeStorageId(sessionId) {
        if (this.options.transformId &&
            typeof this.options.transformId === 'function') {
            return this.options.transformId(sessionId);
        }
        return sessionId;
    }
    /**
     * promisify and bind the `this.crypto.get` function.
     * Please check !!this.crypto === true before using this getter!
     */
    get cryptoGet() {
        if (!this.crypto) {
            throw new Error('Check this.crypto before calling this.cryptoGet!');
        }
        return util_1.default.promisify(this.crypto.get).bind(this.crypto);
    }
    /**
     * Decrypt given session data
     * @param session session data to be decrypt. Mutate the input session.
     */
    async decryptSession(session) {
        if (this.crypto && session) {
            const plaintext = await this.cryptoGet(this.options.crypto.secret, session.session).catch((err) => {
                throw new Error(err);
            });
            // @ts-ignore
            session.session = JSON.parse(plaintext);
        }
    }
    /**
     * Get a session from the store given a session ID (sid)
     * @param sid session ID
     */
    get(sid, callback) {
        ;
        (async () => {
            try {
                debug(`MongoStore#get=${sid}`);
                const collection = await this.collectionP;
                const session = await collection.findOne({
                    _id: this.computeStorageId(sid),
                    $or: [
                        { expires: { $exists: false } },
                        { expires: { $gt: new Date() } },
                    ],
                });
                if (this.crypto && session) {
                    await this.decryptSession(session).catch((err) => callback(err));
                }
                const s = session && this.transformFunctions.unserialize(session.session);
                if (this.options.touchAfter > 0 && (session === null || session === void 0 ? void 0 : session.lastModified)) {
                    s.lastModified = session.lastModified;
                }
                this.emit('get', sid);
                callback(null, s === undefined ? null : s);
            }
            catch (error) {
                callback(error);
            }
        })();
    }
    /**
     * Upsert a session into the store given a session ID (sid) and session (session) object.
     * @param sid session ID
     * @param session session object
     */
    set(sid, session, callback = noop) {
        ;
        (async () => {
            var _a;
            try {
                debug(`MongoStore#set=${sid}`);
                // Removing the lastModified prop from the session object before update
                // @ts-ignore
                if (this.options.touchAfter > 0 && (session === null || session === void 0 ? void 0 : session.lastModified)) {
                    // @ts-ignore
                    delete session.lastModified;
                }
                const s = {
                    _id: this.computeStorageId(sid),
                    session: this.transformFunctions.serialize(session),
                };
                // Expire handling
                if ((_a = session === null || session === void 0 ? void 0 : session.cookie) === null || _a === void 0 ? void 0 : _a.expires) {
                    s.expires = new Date(session.cookie.expires);
                }
                else {
                    // If there's no expiration date specified, it is
                    // browser-session cookie or there is no cookie at all,
                    // as per the connect docs.
                    //
                    // So we set the expiration to two-weeks from now
                    // - as is common practice in the industry (e.g Django) -
                    // or the default specified in the options.
                    s.expires = new Date(Date.now() + this.options.ttl * 1000);
                }
                // Last modify handling
                if (this.options.touchAfter > 0) {
                    s.lastModified = new Date();
                }
                if (this.crypto) {
                    const cryptoSet = util_1.default.promisify(this.crypto.set).bind(this.crypto);
                    const data = await cryptoSet(this.options.crypto.secret, s.session).catch((err) => {
                        throw new Error(err);
                    });
                    s.session = data;
                }
                const collection = await this.collectionP;
                const rawResp = await collection.updateOne({ _id: s._id }, { $set: s }, {
                    upsert: true,
                    writeConcern: this.options.writeOperationOptions,
                });
                if (rawResp.upsertedCount > 0) {
                    this.emit('create', sid);
                }
                else {
                    this.emit('update', sid);
                }
                this.emit('set', sid);
            }
            catch (error) {
                return callback(error);
            }
            return callback(null);
        })();
    }
    touch(sid, session, callback = noop) {
        ;
        (async () => {
            var _a;
            try {
                debug(`MongoStore#touch=${sid}`);
                const updateFields = {};
                const touchAfter = this.options.touchAfter * 1000;
                const lastModified = session.lastModified
                    ? session.lastModified.getTime()
                    : 0;
                const currentDate = new Date();
                // If the given options has a touchAfter property, check if the
                // current timestamp - lastModified timestamp is bigger than
                // the specified, if it's not, don't touch the session
                if (touchAfter > 0 && lastModified > 0) {
                    const timeElapsed = currentDate.getTime() - lastModified;
                    if (timeElapsed < touchAfter) {
                        debug(`Skip touching session=${sid}`);
                        return callback(null);
                    }
                    updateFields.lastModified = currentDate;
                }
                if ((_a = session === null || session === void 0 ? void 0 : session.cookie) === null || _a === void 0 ? void 0 : _a.expires) {
                    updateFields.expires = new Date(session.cookie.expires);
                }
                else {
                    updateFields.expires = new Date(Date.now() + this.options.ttl * 1000);
                }
                const collection = await this.collectionP;
                const rawResp = await collection.updateOne({ _id: this.computeStorageId(sid) }, { $set: updateFields }, { writeConcern: this.options.writeOperationOptions });
                if (rawResp.matchedCount === 0) {
                    return callback(new Error('Unable to find the session to touch'));
                }
                else {
                    this.emit('touch', sid, session);
                    return callback(null);
                }
            }
            catch (error) {
                return callback(error);
            }
        })();
    }
    /**
     * Get all sessions in the store as an array
     */
    all(callback) {
        ;
        (async () => {
            try {
                debug('MongoStore#all()');
                const collection = await this.collectionP;
                const sessions = collection.find({
                    $or: [
                        { expires: { $exists: false } },
                        { expires: { $gt: new Date() } },
                    ],
                });
                const results = [];
                for await (const session of sessions) {
                    if (this.crypto && session) {
                        await this.decryptSession(session);
                    }
                    results.push(this.transformFunctions.unserialize(session.session));
                }
                this.emit('all', results);
                callback(null, results);
            }
            catch (error) {
                callback(error);
            }
        })();
    }
    /**
     * Destroy/delete a session from the store given a session ID (sid)
     * @param sid session ID
     */
    destroy(sid, callback = noop) {
        debug(`MongoStore#destroy=${sid}`);
        this.collectionP
            .then((colleciton) => colleciton.deleteOne({ _id: this.computeStorageId(sid) }, { writeConcern: this.options.writeOperationOptions }))
            .then(() => {
            this.emit('destroy', sid);
            callback(null);
        })
            .catch((err) => callback(err));
    }
    /**
     * Get the count of all sessions in the store
     */
    length(callback) {
        debug('MongoStore#length()');
        this.collectionP
            .then((collection) => collection.countDocuments())
            .then((c) => callback(null, c))
            // @ts-ignore
            .catch((err) => callback(err));
    }
    /**
     * Delete all sessions from the store.
     */
    clear(callback = noop) {
        debug('MongoStore#clear()');
        this.collectionP
            .then((collection) => collection.drop())
            .then(() => callback(null))
            .catch((err) => callback(err));
    }
    /**
     * Close database connection
     */
    close() {
        debug('MongoStore#close()');
        return this.clientP.then((c) => c.close());
    }
}
exports.default = MongoStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9uZ29TdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvTW9uZ29TdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdDO0FBQ2hDLGdEQUF1QjtBQUN2Qix5REFBMEM7QUFDMUMscUNBS2dCO0FBQ2hCLGtEQUF5QjtBQUd6QixNQUFNLEtBQUssR0FBRyxJQUFBLGVBQUssRUFBQyxlQUFlLENBQUMsQ0FBQTtBQWdFcEMsZ0VBQWdFO0FBQ2hFLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQTtBQUNyQixNQUFNLElBQUksR0FBbUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUVyQyxTQUFTLHdCQUF3QixDQUMvQixPQUE0QjtJQUU1QixvREFBb0Q7SUFDcEQsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFBO0lBQ2QsSUFBSSxJQUFJLENBQUE7SUFDUixLQUFLLElBQUksSUFBSSxPQUFPLEVBQUU7UUFDcEIsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3JCLHdEQUF3RDtZQUN4RCwyRUFBMkU7WUFDM0Usb0JBQW9CO1lBQ3BCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUNoQyxDQUFDLENBQUMsb0JBQW9CO29CQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDekIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7U0FDbkI7YUFBTTtZQUNMLG9CQUFvQjtZQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzFCO0tBQ0Y7SUFFRCxPQUFPLEdBQTBCLENBQUE7QUFDbkMsQ0FBQztBQUVELFNBQVMseUJBQXlCLENBQUMsT0FBbUM7SUFDcEUsSUFBSSxPQUFPLENBQUMsU0FBUyxJ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