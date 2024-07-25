import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ThumbnailOverlaySidePanel extends YTNode {
    constructor(data) {
        super();
        this.text = new Text(data.text);
        this.icon_type = data.icon.iconType;
    }
}
ThumbnailOverlaySidePanel.type = 'ThumbnailOverlaySidePanel';
export default ThumbnailOverlaySidePanel;
//# sourceMappingURL=ThumbnailOverlaySidePanel.js.map