export default class EventEmitterLike extends EventTarget {
    #private;
    constructor();
    emit(type: string, ...args: any[]): void;
    on(type: string, listener: (...args: any[]) => void): void;
    once(type: string, listener: (...args: any[]) => void): void;
    off(type: string, listener: (...args: any[]) => void): void;
}
