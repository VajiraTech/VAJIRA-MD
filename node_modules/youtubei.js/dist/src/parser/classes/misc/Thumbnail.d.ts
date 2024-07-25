import type { RawNode } from '../../index.js';
declare class Thumbnail {
    url: string;
    width: number;
    height: number;
    constructor(data: RawNode);
    /**
     * Get thumbnails from response object.
     */
    static fromResponse(data: any): Thumbnail[];
}
export default Thumbnail;
