import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class MetadataRow extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.contents = data.contents.map((content) => new Text(content));
    }
}
MetadataRow.type = 'MetadataRow';
export default MetadataRow;
//# sourceMappingURL=MetadataRow.js.map