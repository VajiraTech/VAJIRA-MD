import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class EmojiPickerUpsellCategory extends YTNode {
    constructor(data) {
        super();
        this.category_id = data.categoryId;
        this.title = new Text(data.title);
        this.upsell = new Text(data.upsell);
        this.emoji_tooltip = data.emojiTooltip;
        this.endpoint = new NavigationEndpoint(data.command);
        this.emoji_ids = data.emojiIds;
    }
}
EmojiPickerUpsellCategory.type = 'EmojiPickerUpsellCategory';
export default EmojiPickerUpsellCategory;
//# sourceMappingURL=EmojiPickerUpsellCategory.js.map