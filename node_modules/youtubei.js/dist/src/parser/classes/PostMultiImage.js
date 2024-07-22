import Parser from '../index.js';
import BackstageImage from './BackstageImage.js';
import { YTNode } from '../helpers.js';
class PostMultiImage extends YTNode {
    constructor(data) {
        super();
        this.images = Parser.parseArray(data.images, BackstageImage);
    }
}
PostMultiImage.type = 'PostMultiImage';
export default PostMultiImage;
//# sourceMappingURL=PostMultiImage.js.map