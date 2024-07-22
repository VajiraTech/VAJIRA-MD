import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class EmojiPickerCategory extends YTNode {
    constructor(data) {
        super();
        this.category_id = data.categoryId;
        this.title = new Text(data.title);
        this.emoji_ids = data.emojiIds;
        this.image_loading_lazy = !!data.imageLoadingLazy;
        this.category_type = data.categoryType;
    }
}
EmojiPickerCategory.type = 'EmojiPickerCategory';
export default EmojiPickerCategory;
//# sourceMappingURL=EmojiPickerCategory.js.map