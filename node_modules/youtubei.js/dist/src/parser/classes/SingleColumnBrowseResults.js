import Parser from '../index.js';
import Tab from './Tab.js';
import { YTNode } from '../helpers.js';
class SingleColumnBrowseResults extends YTNode {
    constructor(data) {
        super();
        this.tabs = Parser.parseArray(data.tabs, Tab);
    }
}
SingleColumnBrowseResults.type = 'SingleColumnBrowseResults';
export default SingleColumnBrowseResults;
//# sourceMappingURL=SingleColumnBrowseResults.js.map