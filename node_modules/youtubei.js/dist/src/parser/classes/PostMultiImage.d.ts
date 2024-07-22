import BackstageImage from './BackstageImage.js';
import { YTNode } from '../helpers.js';
declare class PostMultiImage extends YTNode {
    static type: string;
    images: BackstageImage[];
    constructor(data: any);
}
export default PostMultiImage;
