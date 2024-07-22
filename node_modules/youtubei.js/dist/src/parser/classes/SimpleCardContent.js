import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class SimpleCardContent extends YTNode {
    constructor(data) {
        super();
        this.image = Thumbnail.fromResponse(data.image);
        this.title = new Text(data.title);
        this.display_domain = new Text(data.displayDomain);
        this.show_link_icon = data.showLinkIcon;
        this.call_to_action = data.callToAction;
        this.endpoint = new NavigationEndpoint(data.command);
    }
}
SimpleCardContent.type = 'SimpleCardContent';
export default SimpleCardContent;
//# sourceMappingURL=SimpleCardContent.js.map