import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
declare class PlaylistCustomThumbnail extends YTNode {
    static type: string;
    thumbnail: Thumbnail[];
    constructor(data: any);
}
export default PlaylistCustomThumbnail;
