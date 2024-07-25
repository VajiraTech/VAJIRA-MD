import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class MusicThumbnail extends YTNode {
    constructor(data) {
        super();
        this.contents = Thumbnail.fromResponse(data.thumbnail);
    }
}
MusicThumbnail.type = 'MusicThumbnail';
export default MusicThumbnail;
//# sourceMappingURL=MusicThumbnail.js.map