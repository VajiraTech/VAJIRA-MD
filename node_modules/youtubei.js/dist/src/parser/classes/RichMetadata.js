import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class RichMetadata extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.title = new Text(data.title);
        this.subtitle = new Text(data.subtitle);
        this.call_to_action = new Text(data.callToAction);
        if ((_a = data.callToActionIcon) === null || _a === void 0 ? void 0 : _a.iconType) {
            this.icon_type = (_b = data.callToActionIcon) === null || _b === void 0 ? void 0 : _b.iconType;
        }
        this.endpoint = new NavigationEndpoint(data.endpoint);
    }
}
RichMetadata.type = 'RichMetadata';
export default RichMetadata;
//# sourceMappingURL=RichMetadata.js.map