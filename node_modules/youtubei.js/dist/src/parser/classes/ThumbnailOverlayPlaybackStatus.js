import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ThumbnailOverlayPlaybackStatus extends YTNode {
    constructor(data) {
        super();
        this.text = data.texts.map((text) => new Text(text))[0].toString();
    }
}
ThumbnailOverlayPlaybackStatus.type = 'ThumbnailOverlayPlaybackStatus';
export default ThumbnailOverlayPlaybackStatus;
//# sourceMappingURL=ThumbnailOverlayPlaybackStatus.js.map