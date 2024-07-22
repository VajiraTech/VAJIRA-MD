import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class ExpandedShelfContents extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parseArray(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
ExpandedShelfContents.type = 'ExpandedShelfContents';
export default ExpandedShelfContents;
//# sourceMappingURL=ExpandedShelfContents.js.map