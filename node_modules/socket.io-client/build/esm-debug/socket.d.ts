import { Packet } from "socket.io-parser";
import { Manager } from "./manager.js";
import { DefaultEventsMap, EventNames, EventParams, EventsMap, Emitter } from "@socket.io/component-emitter";
export interface SocketOptions {
    /**
     * the authentication payload sent when connecting to the Namespace
     */
    auth: {
        [key: string]: any;
    } | ((cb: (data: object) => void) => void);
}
export declare type DisconnectDescription = Error | {
    description: string;
    context?: CloseEvent | XMLHttpRequest;
};
interface SocketReservedEvents {
    connect: () => void;
    connect_error: (err: Error) => void;
    disconnect: (reason: Socket.DisconnectReason, description?: DisconnectDescription) => void;
}
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
export declare class Socket<ListenEvents extends EventsMap = DefaultEventsMap, EmitEvents extends EventsMap = ListenEvents> extends Emitter<ListenEvents, EmitEvents, SocketReservedEvents> {
    readonly io: Manager<ListenEvents, EmitEvents>;
    /**
     * A unique identifier for the session.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.id); // undefined
     *
     * socket.on("connect", () => {
     *   console.log(socket.id); // "G5p5..."
     * });
     */
    id: string;
    /**
     * Whether the socket is currently connected to the server.
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.connected); // true
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.connected); // false
     * });
     */
    connected: boolean;
    /**
     * Credentials that are sent when accessing a namespace.
     *
     * @example
     * const socket = io({
     *   auth: {
     *     token: "abcd"
     *   }
     * });
     *
     * // or with a function
     * const socket = io({
     *   auth: (cb) => {
     *     cb({ token: localStorage.token })
     *   }
     * });
     */
    auth: {
        [key: string]: any;
    } | ((cb: (data: object) => void) => void);
    /**
     * Buffer for packets received before the CONNECT packet
     */
    receiveBuffer: Array<ReadonlyArray<any>>;
    /**
     * Buffer for packets that will be sent once the socket is connected
     */
    sendBuffer: Array<Packet>;
    private readonly nsp;
    private ids;
    private acks;
    private flags;
    private subs?;
    private _anyListeners;
    private _anyOutgoingListeners;
    /**
     * `Socket` constructor.
     */
    constructor(io: Manager, nsp: string, opts?: Partial<SocketOptions>);
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected(): boolean;
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    private subEvents;
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active(): boolean;
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect(): this;
    /**
     * Alias for {@link connect()}.
     */
    open(): this;
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args: any[]): this;
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit<Ev extends EventNames<EmitEvents>>(ev: Ev, ...args: EventParams<EmitEvents, Ev>): this;
    /**
     * @private
     */
    private _registerAckCallback;
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    private packet;
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    private onopen;
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    private onerror;
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    private onclose;
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    private onpacket;
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    private onevent;
    private emitEvent;
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    private ack;
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    private onack;
    /**
     * Called upon server connect.
     *
     * @private
     */
    private onconnect;
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    private emitBuffered;
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    private ondisconnect;
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    private destroy;
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect(): this;
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close(): this;
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress: boolean): this;
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile(): this;
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout: number): this;
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener: (...args: any[]) => void): this;
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener: (...args: any[]) => void): this;
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener?: (...args: any[]) => void): this;
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny(): ((...args: any[]) => void)[];
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener: (...args: any[]) => void): this;
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener: (...args: any[]) => void): this;
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener?: (...args: any[]) => void): this;
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing(): ((...args: any[]) => void)[];
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    private notifyOutgoingListeners;
}
export declare namespace Socket {
    type DisconnectReason = "io server disconnect" | "io client disconnect" | "ping timeout" | "transport close" | "transport error" | "parse error";
}
export {};
