import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class SortFilterSubMenu extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        if (data.title) {
            this.title = data.title;
        }
        if ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType) {
            this.icon_type = data.icon.iconType;
        }
        if ((_c = (_b = data.accessibility) === null || _b === void 0 ? void 0 : _b.accessibilityData) === null || _c === void 0 ? void 0 : _c.label) {
            this.label = data.accessibility.accessibilityData.label;
        }
        if (data.tooltip) {
            this.tooltip = data.tooltip;
        }
        if (data.subMenuItems) {
            this.sub_menu_items = data.subMenuItems.map((item) => {
                var _a, _b;
                return ({
                    title: item.title,
                    selected: item.selected,
                    continuation: (_b = (_a = item.continuation) === null || _a === void 0 ? void 0 : _a.reloadContinuationData) === null || _b === void 0 ? void 0 : _b.continuation,
                    endpoint: new NavigationEndpoint(item.serviceEndpoint || item.navigationEndpoint),
                    subtitle: item.subtitle || null
                });
            });
        }
    }
}
SortFilterSubMenu.type = 'SortFilterSubMenu';
export default SortFilterSubMenu;
//# sourceMappingURL=SortFilterSubMenu.js.map