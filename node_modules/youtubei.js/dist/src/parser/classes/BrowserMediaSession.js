import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class BrowserMediaSession extends YTNode {
    constructor(data) {
        super();
        this.album = new Text(data.album);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnailDetails);
    }
}
BrowserMediaSession.type = 'BrowserMediaSession';
export default BrowserMediaSession;
//# sourceMappingURL=BrowserMediaSession.js.map