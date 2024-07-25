import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class RichListHeader extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text(data.title);
        this.subtitle = new Text(data.subtitle);
        this.title_style = (_a = data === null || data === void 0 ? void 0 : data.titleStyle) === null || _a === void 0 ? void 0 : _a.style;
        this.icon_type = (_b = data === null || data === void 0 ? void 0 : data.icon) === null || _b === void 0 ? void 0 : _b.iconType;
    }
}
RichListHeader.type = 'RichListHeader';
export default RichListHeader;
//# sourceMappingURL=RichListHeader.js.map