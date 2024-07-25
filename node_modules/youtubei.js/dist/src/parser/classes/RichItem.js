import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class RichItem extends YTNode {
    constructor(data) {
        super();
        this.content = Parser.parseItem(data.content);
    }
}
RichItem.type = 'RichItem';
export default RichItem;
//# sourceMappingURL=RichItem.js.map