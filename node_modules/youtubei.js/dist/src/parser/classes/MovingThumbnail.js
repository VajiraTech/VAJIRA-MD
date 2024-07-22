import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class MovingThumbnail extends YTNode {
    constructor(data) {
        var _a;
        super();
        return (_a = data.movingThumbnailDetails) === null || _a === void 0 ? void 0 : _a.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
    }
}
MovingThumbnail.type = 'MovingThumbnail';
export default MovingThumbnail;
//# sourceMappingURL=MovingThumbnail.js.map