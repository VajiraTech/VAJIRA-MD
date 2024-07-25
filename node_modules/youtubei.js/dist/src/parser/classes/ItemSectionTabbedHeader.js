import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import ItemSectionTab from './ItemSectionTab.js';
import Parser from '../index.js';
class ItemSectionTabbedHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.tabs = Parser.parseArray(data.tabs, ItemSectionTab);
        if (data.endItems) {
            this.end_items = Parser.parseArray(data.endItems);
        }
    }
}
ItemSectionTabbedHeader.type = 'ItemSectionTabbedHeader';
export default ItemSectionTabbedHeader;
//# sourceMappingURL=ItemSectionTabbedHeader.js.map