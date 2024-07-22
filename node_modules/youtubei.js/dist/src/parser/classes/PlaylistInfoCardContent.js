import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class PlaylistInfoCardContent extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.playlistTitle);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.video_count = new Text(data.playlistVideoCount);
        this.channel_name = new Text(data.channelName);
        this.endpoint = new NavigationEndpoint(data.action);
    }
}
PlaylistInfoCardContent.type = 'PlaylistInfoCardContent';
export default PlaylistInfoCardContent;
//# sourceMappingURL=PlaylistInfoCardContent.js.map