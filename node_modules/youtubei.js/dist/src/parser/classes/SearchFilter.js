import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class SearchFilter extends YTNode {
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.endpoint = new NavigationEndpoint(data.endpoint || data.navigationEndpoint);
        this.tooltip = data.tooltip;
        if (data.status) {
            this.status = data.status;
        }
    }
    get disabled() {
        return this.status === 'FILTER_STATUS_DISABLED';
    }
    get selected() {
        return this.status === 'FILTER_STATUS_SELECTED';
    }
}
SearchFilter.type = 'SearchFilter';
export default SearchFilter;
//# sourceMappingURL=SearchFilter.js.map