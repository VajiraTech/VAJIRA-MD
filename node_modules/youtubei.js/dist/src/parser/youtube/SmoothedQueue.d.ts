import { YTNode } from '../helpers.js';
declare class DelayQueue {
    front: number[];
    back: number[];
    constructor();
    isEmpty(): boolean;
    clear(): void;
    getValues(): number[];
}
declare class SmoothedQueue {
    #private;
    constructor();
    enqueueActionGroup(group: YTNode[]): void;
    emitSmoothedActions(): void;
    clear(): void;
    set callback(cb: Function | null);
    get callback(): Function | null;
    get action_queue(): YTNode[][];
    get estimated_update_interval(): number | null;
    get last_update_time(): number | null;
    get next_update_id(): any;
    get poll_response_delay_queue(): DelayQueue;
}
export default SmoothedQueue;
