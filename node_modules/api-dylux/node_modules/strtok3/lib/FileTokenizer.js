import { AbstractTokenizer } from './AbstractTokenizer.js';
import { EndOfStreamError } from 'peek-readable';
import { open as fsOpen } from 'node:fs/promises';
export class FileTokenizer extends AbstractTokenizer {
    constructor(fileHandle, fileInfo) {
        super(fileInfo);
        this.fileHandle = fileHandle;
    }
    /**
     * Read buffer from file
     * @param uint8Array - Uint8Array to write result to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */
    async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        this.position = normOptions.position;
        const res = await this.fileHandle.read(uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        this.position += res.bytesRead;
        if (res.bytesRead < normOptions.length && (!options || !options.mayBeLess)) {
            throw new EndOfStreamError();
        }
        return res.bytesRead;
    }
    /**
     * Peek buffer from file
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */
    async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const res = await this.fileHandle.read(uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        if ((!normOptions.mayBeLess) && res.bytesRead < normOptions.length) {
            throw new EndOfStreamError();
        }
        return res.bytesRead;
    }
    async close() {
        return this.fileHandle.close();
    }
}
export async function fromFile(sourceFilePath) {
    const fileHandle = await fsOpen(sourceFilePath, 'r');
    const stat = await fileHandle.stat();
    return new FileTokenizer(fileHandle, { path: sourceFilePath, size: stat.size });
}
