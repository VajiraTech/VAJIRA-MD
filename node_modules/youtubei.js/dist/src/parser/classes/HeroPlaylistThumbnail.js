import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
class HeroPlaylistThumbnail extends YTNode {
    constructor(data) {
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.on_tap_endpoint = new NavigationEndpoint(data.onTap);
    }
}
HeroPlaylistThumbnail.type = 'HeroPlaylistThumbnail';
export default HeroPlaylistThumbnail;
//# sourceMappingURL=HeroPlaylistThumbnail.js.map