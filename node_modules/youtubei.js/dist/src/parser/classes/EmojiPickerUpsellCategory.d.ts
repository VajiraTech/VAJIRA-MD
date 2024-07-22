import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class EmojiPickerUpsellCategory extends YTNode {
    static type: string;
    category_id: string;
    title: Text;
    upsell: Text;
    emoji_tooltip: string;
    endpoint: NavigationEndpoint;
    emoji_ids: string[];
    constructor(data: any);
}
export default EmojiPickerUpsellCategory;
