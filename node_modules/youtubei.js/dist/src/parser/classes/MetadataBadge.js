import { YTNode } from '../helpers.js';
class MetadataBadge extends YTNode {
    constructor(data) {
        super();
        if (data === null || data === void 0 ? void 0 : data.icon) {
            this.icon_type = data.icon.iconType;
        }
        if (data === null || data === void 0 ? void 0 : data.style) {
            this.style = data.style;
        }
        if (data === null || data === void 0 ? void 0 : data.label) {
            this.label = data.label;
        }
        if ((data === null || data === void 0 ? void 0 : data.tooltip) || (data === null || data === void 0 ? void 0 : data.iconTooltip)) {
            this.tooltip = data.tooltip || data.iconTooltip;
        }
    }
}
MetadataBadge.type = 'MetadataBadge';
export default MetadataBadge;
//# sourceMappingURL=MetadataBadge.js.map