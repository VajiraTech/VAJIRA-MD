import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class GridChannel extends YTNode {
    constructor(data) {
        super();
        this.id = data.channelId;
        this.author = new Author(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.ownerBadges, data.thumbnail);
        this.subscribers = new Text(data.subscriberCountText);
        this.video_count = new Text(data.videoCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.subscribe_button = Parser.parseItem(data.subscribeButton);
    }
}
GridChannel.type = 'GridChannel';
export default GridChannel;
//# sourceMappingURL=GridChannel.js.map