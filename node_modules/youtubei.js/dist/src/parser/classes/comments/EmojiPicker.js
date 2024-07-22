import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import Parser from '../../index.js';
class EmojiPicker extends YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.categories = Parser.parseArray(data.categories);
        this.category_buttons = Parser.parseArray(data.categoryButtons);
        this.search_placeholder = new Text(data.searchPlaceholderText);
        this.search_no_results = new Text(data.searchNoResultsText);
        this.pick_skin_tone = new Text(data.pickSkinToneText);
        this.clear_search_label = data.clearSearchLabel;
        this.skin_tone_generic_label = data.skinToneGenericLabel;
        this.skin_tone_light_label = data.skinToneLightLabel;
        this.skin_tone_medium_light_label = data.skinToneMediumLightLabel;
        this.skin_tone_medium_label = data.skinToneMediumLabel;
        this.skin_tone_medium_dark_label = data.skinToneMediumDarkLabel;
        this.skin_tone_dark_label = data.skinToneDarkLabel;
    }
}
EmojiPicker.type = 'EmojiPicker';
export default EmojiPicker;
//# sourceMappingURL=EmojiPicker.js.map