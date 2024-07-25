import Text from './misc/Text.js';
import Author from './misc/Author.js';
import { YTNode } from '../helpers.js';
class VideoOwner extends YTNode {
    constructor(data) {
        super();
        // TODO: check this
        this.subscription_button = data.subscriptionButton || null;
        this.subscriber_count = new Text(data.subscriberCountText);
        this.author = new Author(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.badges, data.thumbnail);
    }
}
VideoOwner.type = 'VideoOwner';
export default VideoOwner;
//# sourceMappingURL=VideoOwner.js.map