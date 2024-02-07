import ExpressSession from 'express-session';
import MongoStore, { ConnectMongoOptions } from '../lib/MongoStore';
export declare const makeCookie: () => ExpressSession.Cookie;
export declare const makeData: () => {
    foo: string;
    baz: {
        cow: string;
        chicken: string;
    };
    num: number;
    cookie: ExpressSession.Cookie;
};
export declare const makeDataNoCookie: () => {
    foo: string;
    baz: {
        cow: string;
        fish: string;
        fox: string;
    };
    num: number;
};
export declare const createStoreHelper: (opt?: Partial<ConnectMongoOptions>) => {
    store: MongoStore;
    storePromise: {
        length: () => Promise<number>;
        clear: () => Promise<void>;
        get: (arg1: string) => Promise<ExpressSession.SessionData | null | undefined>;
        set: (arg1: string, arg2: ExpressSession.SessionData) => Promise<void>;
        all: () => Promise<ExpressSession.SessionData[] | {
            [sid: string]: ExpressSession.SessionData;
        } | null | undefined>;
        touch: (arg1: string, arg2: ExpressSession.SessionData & {
            lastModified?: Date | undefined;
        }) => Promise<void>;
        destroy: (arg1: string) => Promise<void>;
        close: () => Promise<void>;
    };
};
