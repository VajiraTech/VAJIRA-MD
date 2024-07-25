import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ChannelOptions extends YTNode {
    constructor(data) {
        super();
        this.avatar = Thumbnail.fromResponse(data.avatar);
        this.endpoint = new NavigationEndpoint(data.avatarEndpoint);
        this.name = data.name;
        this.links = data.links.map((link) => new Text(link));
    }
}
ChannelOptions.type = 'ChannelOptions';
export default ChannelOptions;
//# sourceMappingURL=ChannelOptions.js.map