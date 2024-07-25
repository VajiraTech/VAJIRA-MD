import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class TwoColumnBrowseResults extends YTNode {
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
TwoColumnBrowseResults.type = 'TwoColumnBrowseResults';
export default TwoColumnBrowseResults;
//# sourceMappingURL=TwoColumnBrowseResults.js.map