import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class CollaboratorInfoCardContent extends YTNode {
    constructor(data) {
        super();
        this.channel_avatar = Thumbnail.fromResponse(data.channelAvatar);
        this.custom_text = new Text(data.customText);
        this.channel_name = new Text(data.channelName);
        this.subscriber_count = new Text(data.subscriberCountText);
        this.endpoint = new NavigationEndpoint(data.endpoint);
    }
}
CollaboratorInfoCardContent.type = 'CollaboratorInfoCardContent';
export default CollaboratorInfoCardContent;
//# sourceMappingURL=CollaboratorInfoCardContent.js.map