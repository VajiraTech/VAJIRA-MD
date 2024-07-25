import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class MusicThumbnail extends YTNode {
    static type: string;
    contents: Thumbnail[];
    constructor(data: any);
}
export default MusicThumbnail;
