import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class IconLink extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.icon_type = (_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType;
        if (data.tooltip) {
            this.tooltip = new Text(data.tooltip).toString();
        }
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
IconLink.type = 'IconLink';
export default IconLink;
//# sourceMappingURL=IconLink.js.map