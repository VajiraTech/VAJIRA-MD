import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class Menu extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.items = Parser.parseArray(data.items);
        this.top_level_buttons = Parser.parseArray(data.topLevelButtons);
        this.label = ((_b = (_a = data.accessibility) === null || _a === void 0 ? void 0 : _a.accessibilityData) === null || _b === void 0 ? void 0 : _b.label) || null;
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
Menu.type = 'Menu';
export default Menu;
//# sourceMappingURL=Menu.js.map