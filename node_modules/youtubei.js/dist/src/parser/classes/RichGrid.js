import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class RichGrid extends YTNode {
    constructor(data) {
        super();
        // XXX: we don't parse the masthead since it is usually an advertisement
        // XXX: reflowOptions aren't parsed, I think its only used internally for layout
        this.header = Parser.parseItem(data.header);
        this.contents = Parser.parseArray(data.contents);
    }
}
RichGrid.type = 'RichGrid';
export default RichGrid;
//# sourceMappingURL=RichGrid.js.map