import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
class ItemSectionTab extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.selected = data.selected || false;
        this.endpoint = new NavigationEndpoint(data.endpoint);
    }
}
ItemSectionTab.type = 'Tab';
export default ItemSectionTab;
//# sourceMappingURL=ItemSectionTab.js.map