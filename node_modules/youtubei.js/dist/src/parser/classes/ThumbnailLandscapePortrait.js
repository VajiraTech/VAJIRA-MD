import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
class ThumbnailLandscapePortrait extends YTNode {
    constructor(data) {
        super();
        this.landscape = Thumbnail.fromResponse(data.landscape);
        this.portrait = Thumbnail.fromResponse(data.portrait);
    }
}
ThumbnailLandscapePortrait.type = 'ThumbnailLandscapePortrait';
export default ThumbnailLandscapePortrait;
//# sourceMappingURL=ThumbnailLandscapePortrait.js.map