import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class BrowseFeedActions extends YTNode {
    constructor(data) {
        super();
        this.contents = Parser.parseArray(data.contents);
    }
}
BrowseFeedActions.type = 'BrowseFeedActions';
export default BrowseFeedActions;
//# sourceMappingURL=BrowseFeedActions.js.map