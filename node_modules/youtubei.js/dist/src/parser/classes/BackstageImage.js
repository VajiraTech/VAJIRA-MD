import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class BackstageImage extends YTNode {
    constructor(data) {
        super();
        this.image = Thumbnail.fromResponse(data.image);
        this.endpoint = new NavigationEndpoint(data.command);
    }
}
BackstageImage.type = 'BackstageImage';
export default BackstageImage;
//# sourceMappingURL=BackstageImage.js.map