import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
class PlaylistCustomThumbnail extends YTNode {
    constructor(data) {
        super();
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    }
}
PlaylistCustomThumbnail.type = 'PlaylistCustomThumbnail';
export default PlaylistCustomThumbnail;
//# sourceMappingURL=PlaylistCustomThumbnail.js.map