import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import MetadataBadge from './MetadataBadge.js';
class GridMovie extends YTNode {
    constructor(data) {
        var _a;
        super();
        const length_alt = (_a = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer;
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.duration = data.lengthText ? new Text(data.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text(length_alt.text) : null;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.badges = Parser.parseArray(data.badges, MetadataBadge);
        this.metadata = new Text(data.metadata);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    }
}
GridMovie.type = 'GridMovie';
export default GridMovie;
//# sourceMappingURL=GridMovie.js.map