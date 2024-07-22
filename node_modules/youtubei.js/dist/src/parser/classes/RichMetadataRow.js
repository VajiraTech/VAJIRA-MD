import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class RichMetadataRow extends YTNode {
    constructor(data) {
        super();
        this.contents = Parser.parseArray(data.contents);
    }
}
RichMetadataRow.type = 'RichMetadataRow';
export default RichMetadataRow;
//# sourceMappingURL=RichMetadataRow.js.map