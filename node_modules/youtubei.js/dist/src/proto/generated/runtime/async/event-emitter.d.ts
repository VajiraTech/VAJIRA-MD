export interface EventEmitter<Events extends Record<string, any>> {
    emit<Type extends keyof Events>(type: Type, event: Events[Type]): void;
    on<Type extends keyof Events>(type: Type | "*", listener: Listener<Events[Type]>): Off;
    off(type: keyof Events): void;
}
export type Listener<Event = any> = (event: Event, type: string) => void;
export type Off = () => void;
export declare function createEventEmitter<Events extends Record<string, any>>(): EventEmitter<Events>;
