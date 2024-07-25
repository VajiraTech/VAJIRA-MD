import { createEventBuffer } from "./async/event-buffer.js";
import { defer } from "./async/observer.js";
export function getMethodImpl(handler) {
    return (messages, metadata) => {
        const headerPromise = defer();
        const trailerPromise = defer();
        const drainEnd = defer();
        const eventBuffer = createEventBuffer({
            onDrainEnd: drainEnd.resolve,
        });
        const header = headerPromise.resolve;
        const send = eventBuffer.push;
        const end = (value) => {
            eventBuffer.finish();
            trailerPromise.resolve(value);
        };
        handler({ metadata, messages, drainEnd }, { header, send, end });
        return [eventBuffer.drain(), headerPromise, trailerPromise];
    };
}
export function createServerImplBuilder() {
    const buffer = createEventBuffer();
    return {
        register(methodDescriptor, handler) {
            buffer.push([methodDescriptor, getMethodImpl(handler)]);
        },
        finish: buffer.finish,
        drain: buffer.drain,
    };
}
//# sourceMappingURL=rpc.js.map