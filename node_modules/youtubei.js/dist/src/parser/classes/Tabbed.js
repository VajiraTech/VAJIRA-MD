import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class Tabbed extends YTNode {
    constructor(data) {
        super();
        // TODO: use parseArray instead
        this.contents = Parser.parse(data);
    }
}
Tabbed.type = 'Tabbed';
export default Tabbed;
//# sourceMappingURL=Tabbed.js.map