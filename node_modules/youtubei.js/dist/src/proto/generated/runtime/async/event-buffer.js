import { defer } from "./observer.js";
export function createEventBuffer(config) {
    const queue = [];
    let _error;
    let deferred;
    let finished = false;
    return {
        push(value) {
            if (finished)
                throw new Error("can't push after finish");
            if (deferred) {
                deferred.resolve({ value, done: false });
                deferred = undefined;
            }
            else {
                queue.push(value);
            }
        },
        error(error) {
            if (deferred)
                deferred.reject(error);
            else
                _error = error;
            finished = true;
        },
        finish() {
            deferred === null || deferred === void 0 ? void 0 : deferred.resolve({ value: undefined, done: true });
            finished = true;
        },
        drain() {
            var _a;
            (_a = config === null || config === void 0 ? void 0 : config.onDrainStart) === null || _a === void 0 ? void 0 : _a.call(config);
            const result = {
                [Symbol.asyncIterator]: () => result,
                next() {
                    if (queue.length > 0) {
                        return Promise.resolve({
                            value: queue.shift(),
                            done: false,
                        });
                    }
                    else {
                        if (_error)
                            return Promise.reject(_error);
                        if (finished) {
                            return Promise.resolve({ value: undefined, done: true });
                        }
                        else {
                            return deferred = defer();
                        }
                    }
                },
                return(value) {
                    var _a;
                    (_a = config === null || config === void 0 ? void 0 : config.onDrainEnd) === null || _a === void 0 ? void 0 : _a.call(config);
                    return Promise.resolve({ value, done: true });
                },
                throw(error) {
                    var _a;
                    (_a = config === null || config === void 0 ? void 0 : config.onDrainEnd) === null || _a === void 0 ? void 0 : _a.call(config);
                    return Promise.reject(error);
                },
            };
            return result;
        },
    };
}
//# sourceMappingURL=event-buffer.js.map