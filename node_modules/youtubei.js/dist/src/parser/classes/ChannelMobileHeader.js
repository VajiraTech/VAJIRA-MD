import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ChannelMobileHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
ChannelMobileHeader.type = 'ChannelMobileHeader';
export default ChannelMobileHeader;
//# sourceMappingURL=ChannelMobileHeader.js.map