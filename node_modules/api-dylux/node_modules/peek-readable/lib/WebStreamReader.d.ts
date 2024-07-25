import { ReadableStream } from 'node:stream/web';
export { EndOfStreamError } from './EndOfStreamError.js';
import { AbstractStreamReader } from "./AbstractStreamReader.js";
/**
 * Read from a WebStream
 * Reference: https://nodejs.org/api/webstreams.html#class-readablestreambyobreader
 */
export declare class WebStreamReader extends AbstractStreamReader {
    private reader;
    constructor(stream: ReadableStream<Uint8Array>);
    protected readFromStream(buffer: Uint8Array, offset: number, length: number): Promise<number>;
}
