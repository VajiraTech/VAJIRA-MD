import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class DropdownItem extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.label = new Text(data.label).toString();
        this.selected = !!data.isSelected;
        if (data.int32Value) {
            this.value = data.int32Value;
        }
        else if (data.stringValue) {
            this.value = data.stringValue;
        }
        if ((_a = data.onSelectCommand) === null || _a === void 0 ? void 0 : _a.browseEndpoint) {
            this.endpoint = new NavigationEndpoint(data.onSelectCommand);
        }
        if ((_b = data.icon) === null || _b === void 0 ? void 0 : _b.iconType) {
            this.icon_type = (_c = data.icon) === null || _c === void 0 ? void 0 : _c.iconType;
        }
        if (data.descriptionText) {
            this.description = new Text(data.descriptionText).toString();
        }
    }
}
DropdownItem.type = 'DropdownItem';
export default DropdownItem;
//# sourceMappingURL=DropdownItem.js.map