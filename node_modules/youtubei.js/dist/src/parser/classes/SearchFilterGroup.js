import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import Text from './misc/Text.js';
import SearchFilter from './SearchFilter.js';
class SearchFilterGroup extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.filters = Parser.parseArray(data.filters, SearchFilter);
    }
}
SearchFilterGroup.type = 'SearchFilterGroup';
export default SearchFilterGroup;
//# sourceMappingURL=SearchFilterGroup.js.map