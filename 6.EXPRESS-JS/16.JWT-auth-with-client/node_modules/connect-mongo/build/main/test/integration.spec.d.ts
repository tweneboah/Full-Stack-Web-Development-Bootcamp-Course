declare module 'express-session' {
    interface SessionData {
        [key: string]: any;
    }
}
export {};
