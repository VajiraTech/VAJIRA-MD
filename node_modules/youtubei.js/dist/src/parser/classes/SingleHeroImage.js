import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class SingleHeroImage extends YTNode {
    constructor(data) {
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.style = data.style;
    }
}
SingleHeroImage.type = 'SingleHeroImage';
export default SingleHeroImage;
//# sourceMappingURL=SingleHeroImage.js.map