import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class RelatedChipCloud extends YTNode {
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
    }
}
RelatedChipCloud.type = 'RelatedChipCloud';
export default RelatedChipCloud;
//# sourceMappingURL=RelatedChipCloud.js.map