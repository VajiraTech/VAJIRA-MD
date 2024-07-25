export interface Observer<T> {
    next(value: T): void;
    error(exception?: any): void;
    complete(): void;
}
export type SubscribeFn<T> = (observer: Observer<T>) => UnsubscribeFn;
export type UnsubscribeFn = () => void;
export interface Deferred<T> extends Promise<T> {
    resolve(value: T): void;
    reject(reason?: any): void;
}
export declare function defer<T>(): Deferred<T>;
export interface Next<T> {
    (): Promise<[T, boolean]>;
}
export declare function createSubscribeFn<T>(next: Next<T>, wait?: Promise<void>): SubscribeFn<T>;
export declare function subscribeFnToAsyncGenerator<T>(subscribe: SubscribeFn<T>): AsyncGenerator<T>;
