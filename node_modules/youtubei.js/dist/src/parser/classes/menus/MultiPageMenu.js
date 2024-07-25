import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class MultiPageMenu extends YTNode {
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
        this.sections = Parser.parse(data.sections);
        this.style = data.style;
    }
}
MultiPageMenu.type = 'MultiPageMenu';
export default MultiPageMenu;
//# sourceMappingURL=MultiPageMenu.js.map