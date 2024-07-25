import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Text from './misc/Text.js';
class ChannelFeaturedContent extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.items = Parser.parseArray(data.items);
    }
}
ChannelFeaturedContent.type = 'ChannelFeaturedContent';
export default ChannelFeaturedContent;
//# sourceMappingURL=ChannelFeaturedContent.js.map