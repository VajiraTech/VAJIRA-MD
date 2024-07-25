import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
class ThumbnailOverlayBottomPanel extends YTNode {
    constructor(data) {
        super();
        if (Reflect.has(data, 'text')) {
            this.text = new Text(data.text);
        }
        if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
            this.icon_type = data.icon.iconType;
        }
    }
}
ThumbnailOverlayBottomPanel.type = 'ThumbnailOverlayBottomPanel';
export default ThumbnailOverlayBottomPanel;
//# sourceMappingURL=ThumbnailOverlayBottomPanel.js.map