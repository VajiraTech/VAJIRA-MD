import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class CollageHeroImage extends YTNode {
    constructor(data) {
        super();
        this.left = Thumbnail.fromResponse(data.leftThumbnail);
        this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
        this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
CollageHeroImage.type = 'CollageHeroImage';
export default CollageHeroImage;
//# sourceMappingURL=CollageHeroImage.js.map