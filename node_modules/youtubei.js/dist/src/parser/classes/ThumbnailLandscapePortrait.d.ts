import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
declare class ThumbnailLandscapePortrait extends YTNode {
    static type: string;
    landscape: Thumbnail[];
    portrait: Thumbnail[];
    constructor(data: any);
}
export default ThumbnailLandscapePortrait;
