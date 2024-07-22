import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ItemSectionHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
ItemSectionHeader.type = 'ItemSectionHeader';
export default ItemSectionHeader;
//# sourceMappingURL=ItemSectionHeader.js.map