import * as session from 'express-session';
import { Collection, MongoClient, MongoClientOptions, WriteConcernSettings } from 'mongodb';
export type CryptoOptions = {
    secret: false | string;
    algorithm?: string;
    hashing?: string;
    encodeas?: string;
    key_size?: number;
    iv_size?: number;
    at_size?: number;
};
export type ConnectMongoOptions = {
    mongoUrl?: string;
    clientPromise?: Promise<MongoClient>;
    client?: MongoClient;
    collectionName?: string;
    mongoOptions?: MongoClientOptions;
    dbName?: string;
    ttl?: number;
    touchAfter?: number;
    stringify?: boolean;
    createAutoRemoveIdx?: boolean;
    autoRemove?: 'native' | 'interval' | 'disabled';
    autoRemoveInterval?: number;
    serialize?: (a: any) => any;
    unserialize?: (a: any) => any;
    writeOperationOptions?: WriteConcernSettings;
    transformId?: (a: any) => any;
    crypto?: CryptoOptions;
};
type InternalSessionType = {
    _id: string;
    session: any;
    expires?: Date;
    lastModified?: Date;
};
export default class MongoStore extends session.Store {
    private clientP;
    private crypto;
    private timer?;
    collectionP: Promise<Collection<InternalSessionType>>;
    private options;
    private transformFunctions;
    constructor({ collectionName, ttl, mongoOptions, autoRemove, autoRemoveInterval, touchAfter, stringify, crypto, ...required }: ConnectMongoOptions);
    static create(options: ConnectMongoOptions): MongoStore;
    private setAutoRemove;
    private computeStorageId;
    /**
     * promisify and bind the `this.crypto.get` function.
     * Please check !!this.crypto === true before using this getter!
     */
    private get cryptoGet();
    /**
     * Decrypt given session data
     * @param session session data to be decrypt. Mutate the input session.
     */
    private decryptSession;
    /**
     * Get a session from the store given a session ID (sid)
     * @param sid session ID
     */
    get(sid: string, callback: (err: any, session?: session.SessionData | null) => void): void;
    /**
     * Upsert a session into the store given a session ID (sid) and session (session) object.
     * @param sid session ID
     * @param session session object
     */
    set(sid: string, session: session.SessionData, callback?: (err: any) => void): void;
    touch(sid: string, session: session.SessionData & {
        lastModified?: Date;
    }, callback?: (err: any) => void): void;
    /**
     * Get all sessions in the store as an array
     */
    all(callback: (err: any, obj?: session.SessionData[] | {
        [sid: string]: session.SessionData;
    } | null) => void): void;
    /**
     * Destroy/delete a session from the store given a session ID (sid)
     * @param sid session ID
     */
    destroy(sid: string, callback?: (err: any) => void): void;
    /**
     * Get the count of all sessions in the store
     */
    length(callback: (err: any, length: number) => void): void;
    /**
     * Delete all sessions from the store.
     */
    clear(callback?: (err: any) => void): void;
    /**
     * Close database connection
     */
    close(): Promise<void>;
}
export {};
