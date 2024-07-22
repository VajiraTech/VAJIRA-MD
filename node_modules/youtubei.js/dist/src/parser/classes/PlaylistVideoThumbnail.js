import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class PlaylistVideoThumbnail extends YTNode {
    constructor(data) {
        super();
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    }
}
PlaylistVideoThumbnail.type = 'PlaylistVideoThumbnail';
export default PlaylistVideoThumbnail;
//# sourceMappingURL=PlaylistVideoThumbnail.js.map