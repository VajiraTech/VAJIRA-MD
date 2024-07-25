import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ThumbnailOverlayNowPlaying extends YTNode {
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
    }
}
ThumbnailOverlayNowPlaying.type = 'ThumbnailOverlayNowPlaying';
export default ThumbnailOverlayNowPlaying;
//# sourceMappingURL=ThumbnailOverlayNowPlaying.js.map