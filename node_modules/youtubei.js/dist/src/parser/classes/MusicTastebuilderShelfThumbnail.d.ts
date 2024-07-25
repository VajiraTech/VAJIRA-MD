import { YTNode } from '../helpers.js';
import { Thumbnail } from '../misc.js';
import type { RawNode } from '../index.js';
export default class MusicTastebuilderShelfThumbnail extends YTNode {
    static type: string;
    thumbnail: Thumbnail[];
    constructor(data: RawNode);
}
