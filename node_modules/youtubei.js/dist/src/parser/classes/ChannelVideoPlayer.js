import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ChannelVideoPlayer extends YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.description = new Text(data.description);
        this.views = new Text(data.viewCountText);
        this.published = new Text(data.publishedTimeText);
    }
}
ChannelVideoPlayer.type = 'ChannelVideoPlayer';
export default ChannelVideoPlayer;
//# sourceMappingURL=ChannelVideoPlayer.js.map