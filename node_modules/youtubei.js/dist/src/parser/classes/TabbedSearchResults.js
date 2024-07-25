import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Tab from './Tab.js';
class TabbedSearchResults extends YTNode {
    constructor(data) {
        super();
        this.tabs = Parser.parseArray(data.tabs, Tab);
    }
}
TabbedSearchResults.type = 'TabbedSearchResults';
export default TabbedSearchResults;
//# sourceMappingURL=TabbedSearchResults.js.map