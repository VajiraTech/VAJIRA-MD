import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class PdgCommentChip extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.text = new Text(data.chipText);
        this.color_pallette = {
            background_color: (_a = data.chipColorPalette) === null || _a === void 0 ? void 0 : _a.backgroundColor,
            foreground_title_color: (_b = data.chipColorPalette) === null || _b === void 0 ? void 0 : _b.foregroundTitleColor
        };
        this.icon_type = (_c = data.chipIcon) === null || _c === void 0 ? void 0 : _c.iconType;
    }
}
PdgCommentChip.type = 'PdgCommentChip';
export default PdgCommentChip;
//# sourceMappingURL=PdgCommentChip.js.map