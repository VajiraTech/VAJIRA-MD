import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class FeedTabbedHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
FeedTabbedHeader.type = 'FeedTabbedHeader';
export default FeedTabbedHeader;
//# sourceMappingURL=FeedTabbedHeader.js.map