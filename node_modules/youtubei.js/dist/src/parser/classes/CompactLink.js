import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class CompactLink extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title).toString();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.style = data.style;
    }
}
CompactLink.type = 'CompactLink';
export default CompactLink;
//# sourceMappingURL=CompactLink.js.map