import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscribeButton from './SubscribeButton.js';
import { YTNode } from '../helpers.js';
class SlimOwner extends YTNode {
    constructor(data) {
        super();
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.title = new Text(data.title);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.subscribe_button = Parser.parseItem(data.subscribeButton, SubscribeButton);
    }
}
SlimOwner.type = 'SlimOwner';
export default SlimOwner;
//# sourceMappingURL=SlimOwner.js.map