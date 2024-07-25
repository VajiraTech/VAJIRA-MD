import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class MetadataRowHeader extends YTNode {
    constructor(data) {
        super();
        this.content = new Text(data.content);
        this.has_divider_line = data.hasDividerLine;
    }
}
MetadataRowHeader.type = 'MetadataRowHeader';
export default MetadataRowHeader;
//# sourceMappingURL=MetadataRowHeader.js.map