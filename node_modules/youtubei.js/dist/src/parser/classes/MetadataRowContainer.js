import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class MetadataRowContainer extends YTNode {
    constructor(data) {
        super();
        this.rows = Parser.parseArray(data.rows);
        this.collapsed_item_count = data.collapsedItemCount;
    }
}
MetadataRowContainer.type = 'MetadataRowContainer';
export default MetadataRowContainer;
//# sourceMappingURL=MetadataRowContainer.js.map