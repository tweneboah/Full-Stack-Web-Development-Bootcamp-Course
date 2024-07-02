"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const __1 = __importDefault(require("../"));
function createSupertetAgent(sessionOpts, mongoStoreOpts) {
    const app = (0, express_1.default)();
    const store = __1.default.create(mongoStoreOpts);
    app.use((0, express_session_1.default)({
        ...sessionOpts,
        store: store,
    }));
    app.get('/', function (req, res) {
        if (typeof req.session.views === 'number') {
            req.session.views++;
        }
        else {
            req.session.views = 0;
        }
        res.status(200).send({ views: req.session.views });
    });
    app.get('/ping', function (req, res) {
        res.status(200).send({ views: req.session.views });
    });
    const agent = supertest_1.default.agent(app);
    return agent;
}
function createSupertetAgentWithDefault(sessionOpts = {}, mongoStoreOpts = {}) {
    return createSupertetAgent({ secret: 'foo', ...sessionOpts }, {
        mongoUrl: 'mongodb://root:example@127.0.0.1:27017',
        dbName: 'itegration-test-db',
        stringify: false,
        ...mongoStoreOpts,
    });
}
ava_1.default.serial.cb('simple case', (t) => {
    const agent = createSupertetAgentWithDefault();
    agent
        .get('/')
        .expect(200)
        .then((response) => response.headers['set-cookie'])
        .then((cookie) => {
        agent
            .get('/')
            .expect(200)
            .end((err, res) => {
            t.is(err, null);
            t.deepEqual(res.body, { views: 1 });
            return t.end();
        });
    });
});
ava_1.default.serial.cb('simple case with touch after', (t) => {
    const agent = createSupertetAgentWithDefault({ resave: false, saveUninitialized: false, rolling: true }, { touchAfter: 1 });
    agent
        .get('/')
        .expect(200)
        .then(() => {
        agent
            .get('/')
            .expect(200)
            .end((err, res) => {
            t.is(err, null);
            t.deepEqual(res.body, { views: 1 });
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1200);
            }).then(() => {
                agent
                    .get('/ping')
                    .expect(200)
                    .end((err, res) => {
                    t.is(err, null);
                    t.deepEqual(res.body, { views: 1 });
                    return t.end();
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb24uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2ludGVncmF0aW9uLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBc0I7QUFDdEIsMERBQStCO0FBQy9CLHNEQUE2QjtBQUM3QixzRUFBeUQ7QUFDekQsNENBQTRCO0FBUzVCLFNBQVMsbUJBQW1CLENBQzFCLFdBQTJCLEVBQzNCLGNBQW1DO0lBRW5DLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFBO0lBQ3JCLE1BQU0sS0FBSyxHQUFHLFdBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDL0MsR0FBRyxDQUFDLEdBQUcsQ0FDTCxJQUFBLHlCQUFPLEVBQUM7UUFDTixHQUFHLFdBQVc7UUFDZCxLQUFLLEVBQUUsS0FBSztLQUNiLENBQUMsQ0FDSCxDQUFBO0lBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRztRQUM3QixJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3pDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDcEI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtTQUN0QjtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUNwRCxDQUFDLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7UUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUs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