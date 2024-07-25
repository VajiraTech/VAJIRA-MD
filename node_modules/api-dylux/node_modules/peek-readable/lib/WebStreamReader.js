import { EndOfStreamError } from './EndOfStreamError.js';
export { EndOfStreamError } from './EndOfStreamError.js';
import { AbstractStreamReader } from "./AbstractStreamReader.js";
/**
 * Read from a WebStream
 * Reference: https://nodejs.org/api/webstreams.html#class-readablestreambyobreader
 */
export class WebStreamReader extends AbstractStreamReader {
    constructor(stream) {
        super();
        this.reader = stream.getReader({ mode: 'byob' });
    }
    async readFromStream(buffer, offset, length) {
        if (this.endOfStream) {
            throw new EndOfStreamError();
        }
        const result = await this.reader.read(new Uint8Array(length));
        if (result.done) {
            this.endOfStream = result.done;
        }
        if (result.value) {
            buffer.set(result.value, offset);
            return result.value.byteLength;
        }
        return 0;
    }
}
