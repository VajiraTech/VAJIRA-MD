var _SmoothedQueue_last_update_time, _SmoothedQueue_estimated_update_interval, _SmoothedQueue_callback, _SmoothedQueue_action_queue, _SmoothedQueue_next_update_id, _SmoothedQueue_poll_response_delay_queue;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
/**
 * Flattens the given queue.
 * @param queue - The queue to flatten.
 */
function flattenQueue(queue) {
    const nodes = [];
    for (const group of queue) {
        if (Array.isArray(group)) {
            for (const node of group) {
                nodes.push(node);
            }
        }
        else {
            nodes.push(group);
        }
    }
    return nodes;
}
class DelayQueue {
    constructor() {
        this.front = [];
        this.back = [];
    }
    isEmpty() {
        return !this.front.length && !this.back.length;
    }
    clear() {
        this.front = [];
        this.back = [];
    }
    getValues() {
        return this.front.concat(this.back.reverse());
    }
}
class SmoothedQueue {
    constructor() {
        _SmoothedQueue_last_update_time.set(this, void 0);
        _SmoothedQueue_estimated_update_interval.set(this, void 0);
        _SmoothedQueue_callback.set(this, void 0);
        _SmoothedQueue_action_queue.set(this, void 0);
        _SmoothedQueue_next_update_id.set(this, void 0);
        _SmoothedQueue_poll_response_delay_queue.set(this, void 0);
        __classPrivateFieldSet(this, _SmoothedQueue_last_update_time, null, "f");
        __classPrivateFieldSet(this, _SmoothedQueue_estimated_update_interval, null, "f");
        __classPrivateFieldSet(this, _SmoothedQueue_callback, null, "f");
        __classPrivateFieldSet(this, _SmoothedQueue_action_queue, [], "f");
        __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, null, "f");
        __classPrivateFieldSet(this, _SmoothedQueue_poll_response_delay_queue, new DelayQueue(), "f");
    }
    enqueueActionGroup(group) {
        if (__classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f") !== null) {
            const delay = Date.now() - __classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f");
            __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").back.push(delay);
            if (5 < (__classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front.length + __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").back.length)) {
                if (!__classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front.length) {
                    __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front = __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").back;
                    __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front.reverse();
                    __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").back = [];
                }
                __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front.pop();
            }
            __classPrivateFieldSet(this, _SmoothedQueue_estimated_update_interval, Math.max(...__classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").getValues()), "f");
        }
        __classPrivateFieldSet(this, _SmoothedQueue_last_update_time, Date.now(), "f");
        __classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").push(group);
        if (__classPrivateFieldGet(this, _SmoothedQueue_next_update_id, "f") === null) {
            __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, setTimeout(this.emitSmoothedActions.bind(this)), "f");
        }
    }
    emitSmoothedActions() {
        __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, null, "f");
        if (__classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").length) {
            let delay = 1E4;
            if (__classPrivateFieldGet(this, _SmoothedQueue_estimated_update_interval, "f") !== null && __classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f") !== null) {
                delay = __classPrivateFieldGet(this, _SmoothedQueue_estimated_update_interval, "f") - Date.now() + __classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f");
            }
            delay = __classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").length < delay / 80 ? 1 : Math.ceil(__classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").length / (delay / 80));
            const actions = flattenQueue(__classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").splice(0, delay));
            if (__classPrivateFieldGet(this, _SmoothedQueue_callback, "f")) {
                __classPrivateFieldGet(this, _SmoothedQueue_callback, "f").call(this, actions);
            }
            if (__classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f") !== null) {
                delay == 1 ? (delay = __classPrivateFieldGet(this, _SmoothedQueue_estimated_update_interval, "f") / __classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").length,
                    delay *= Math.random() + 0.5,
                    delay = Math.min(1E3, delay),
                    delay = Math.max(80, delay)) : delay = 80;
                __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, setTimeout(this.emitSmoothedActions.bind(this), delay), "f");
            }
        }
    }
    clear() {
        if (__classPrivateFieldGet(this, _SmoothedQueue_next_update_id, "f") !== null) {
            clearTimeout(__classPrivateFieldGet(this, _SmoothedQueue_next_update_id, "f"));
            __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, null, "f");
        }
        __classPrivateFieldSet(this, _SmoothedQueue_action_queue, [], "f");
    }
    set callback(cb) {
        __classPrivateFieldSet(this, _SmoothedQueue_callback, cb, "f");
    }
    get callback() {
        return __classPrivateFieldGet(this, _SmoothedQueue_callback, "f");
    }
    get action_queue() {
        return __classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f");
    }
    get estimated_update_interval() {
        return __classPrivateFieldGet(this, _SmoothedQueue_estimated_update_interval, "f");
    }
    get last_update_time() {
        return __classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f");
    }
    get next_update_id() {
        return __classPrivateFieldGet(this, _SmoothedQueue_next_update_id, "f");
    }
    get poll_response_delay_queue() {
        return __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f");
    }
}
_SmoothedQueue_last_update_time = new WeakMap(), _SmoothedQueue_estimated_update_interval = new WeakMap(), _SmoothedQueue_callback = new WeakMap(), _SmoothedQueue_action_queue = new WeakMap(), _SmoothedQueue_next_update_id = new WeakMap(), _SmoothedQueue_poll_response_delay_queue = new WeakMap();
export default SmoothedQueue;
//# sourceMappingURL=SmoothedQueue.js.map