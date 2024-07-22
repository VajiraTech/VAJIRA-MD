import { YTNode } from '../helpers.js';
class EmojiPickerCategoryButton extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.category_id = data.categoryId;
        this.icon_type = (_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType;
        this.tooltip = data.tooltip;
    }
}
EmojiPickerCategoryButton.type = 'EmojiPickerCategoryButton';
export default EmojiPickerCategoryButton;
//# sourceMappingURL=EmojiPickerCategoryButton.js.map