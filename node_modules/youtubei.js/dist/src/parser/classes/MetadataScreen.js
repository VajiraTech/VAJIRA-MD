import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class MetadataScreen extends YTNode {
    constructor(data) {
        super();
        this.section_list = Parser.parseItem(data);
    }
}
MetadataScreen.type = 'MetadataScreen';
export default MetadataScreen;
//# sourceMappingURL=MetadataScreen.js.map