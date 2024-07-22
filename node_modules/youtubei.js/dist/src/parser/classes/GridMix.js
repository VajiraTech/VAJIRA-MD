import Text from './misc/Text.js';
import Parser from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class GridMix extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.id = data.playlistId;
        this.title = new Text(data.title);
        this.author = ((_a = data.shortBylineText) === null || _a === void 0 ? void 0 : _a.simpleText) ?
            new Text(data.shortBylineText) : ((_b = data.longBylineText) === null || _b === void 0 ? void 0 : _b.simpleText) ?
            new Text(data.longBylineText) : null;
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.video_count = new Text(data.videoCountText);
        this.video_count_short = new Text(data.videoCountShortText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.secondary_endpoint = new NavigationEndpoint(data.secondaryNavigationEndpoint);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    }
}
GridMix.type = 'GridMix';
export default GridMix;
//# sourceMappingURL=GridMix.js.map