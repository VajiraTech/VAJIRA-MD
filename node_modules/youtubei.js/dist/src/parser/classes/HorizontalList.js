import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class HorizontalList extends YTNode {
    constructor(data) {
        super();
        this.visible_item_count = data.visibleItemCount;
        this.items = Parser.parseArray(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
HorizontalList.type = 'HorizontalList';
export default HorizontalList;
//# sourceMappingURL=HorizontalList.js.map