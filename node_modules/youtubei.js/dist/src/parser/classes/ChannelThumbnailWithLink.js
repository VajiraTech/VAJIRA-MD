import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ChannelThumbnailWithLink extends YTNode {
    constructor(data) {
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.label = data.accessibility.accessibilityData.label;
    }
}
ChannelThumbnailWithLink.type = 'ChannelThumbnailWithLink';
export default ChannelThumbnailWithLink;
//# sourceMappingURL=ChannelThumbnailWithLink.js.map