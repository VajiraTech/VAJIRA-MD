import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ThumbnailOverlayHoverText extends YTNode {
    constructor(data) {
        super();
        this.text = new Text(data.text);
        this.icon_type = data.icon.iconType;
    }
}
ThumbnailOverlayHoverText.type = 'ThumbnailOverlayHoverText';
export default ThumbnailOverlayHoverText;
//# sourceMappingURL=ThumbnailOverlayHoverText.js.map