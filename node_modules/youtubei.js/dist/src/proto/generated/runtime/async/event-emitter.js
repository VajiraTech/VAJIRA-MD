export function createEventEmitter() {
    const listeners = {};
    const eventEmitter = {
        emit(type, event) {
            var _a, _b;
            (_a = listeners[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => listener(event, type));
            (type !== "*") && ((_b = listeners["*"]) === null || _b === void 0 ? void 0 : _b.forEach((listener) => listener(event, type)));
        },
        on(type, listener) {
            (listeners[type] || (listeners[type] = new Set())).add(listener);
            return () => { var _a; return (_a = listeners[type]) === null || _a === void 0 ? void 0 : _a.delete(listener); };
        },
        off(type) {
            delete listeners[type];
        },
    };
    return eventEmitter;
}
//# sourceMappingURL=event-emitter.js.map