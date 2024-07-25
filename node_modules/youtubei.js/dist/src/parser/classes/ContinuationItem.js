import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ContinuationItem extends YTNode {
    constructor(data) {
        super();
        this.trigger = data.trigger;
        if (data.button) {
            this.button = Parser.parseItem(data.button);
        }
        this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
    }
}
ContinuationItem.type = 'ContinuationItem';
export default ContinuationItem;
//# sourceMappingURL=ContinuationItem.js.map