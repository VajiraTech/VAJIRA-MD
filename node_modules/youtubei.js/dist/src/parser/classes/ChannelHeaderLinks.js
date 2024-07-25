import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class HeaderLink {
    constructor(data) {
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.icon = Thumbnail.fromResponse(data.icon);
        this.title = new Text(data.title);
    }
}
class ChannelHeaderLinks extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.primary = ((_a = data.primaryLinks) === null || _a === void 0 ? void 0 : _a.map((link) => new HeaderLink(link))) || [];
        this.secondary = ((_b = data.secondaryLinks) === null || _b === void 0 ? void 0 : _b.map((link) => new HeaderLink(link))) || [];
    }
}
ChannelHeaderLinks.type = 'ChannelHeaderLinks';
export default ChannelHeaderLinks;
//# sourceMappingURL=ChannelHeaderLinks.js.map