import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class SingleHeroImage extends YTNode {
    static type: string;
    thumbnails: Thumbnail[];
    style: string;
    constructor(data: any);
}
export default SingleHeroImage;
