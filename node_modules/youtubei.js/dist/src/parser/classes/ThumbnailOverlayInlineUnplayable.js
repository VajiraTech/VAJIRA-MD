import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ThumbnailOverlayInlineUnplayable extends YTNode {
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
    }
}
ThumbnailOverlayInlineUnplayable.type = 'ThumbnailOverlayInlineUnplayable';
export default ThumbnailOverlayInlineUnplayable;
//# sourceMappingURL=ThumbnailOverlayInlineUnplayable.js.map