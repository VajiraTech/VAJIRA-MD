import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscribeButton from './SubscribeButton.js';
class TopicChannelDetails extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text(data.title);
        this.avatar = Thumbnail.fromResponse((_a = data.thumbnail) !== null && _a !== void 0 ? _a : data.avatar);
        this.subtitle = new Text(data.subtitle);
        this.subscribe_button = Parser.parseItem(data.subscribeButton, SubscribeButton);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
TopicChannelDetails.type = 'TopicChannelDetails';
export default TopicChannelDetails;
//# sourceMappingURL=TopicChannelDetails.js.map