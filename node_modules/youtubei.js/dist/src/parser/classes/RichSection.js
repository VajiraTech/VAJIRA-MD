import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class RichSection extends YTNode {
    constructor(data) {
        super();
        this.content = Parser.parseItem(data.content);
    }
}
RichSection.type = 'RichSection';
export default RichSection;
//# sourceMappingURL=RichSection.js.map