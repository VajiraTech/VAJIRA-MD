import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ThumbnailOverlayTimeStatus extends YTNode {
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
        this.style = data.style;
    }
}
ThumbnailOverlayTimeStatus.type = 'ThumbnailOverlayTimeStatus';
export default ThumbnailOverlayTimeStatus;
//# sourceMappingURL=ThumbnailOverlayTimeStatus.js.map