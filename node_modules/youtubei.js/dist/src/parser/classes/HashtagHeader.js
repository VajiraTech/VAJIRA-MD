import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
class HashtagHeader extends YTNode {
    constructor(data) {
        super();
        this.hashtag = new Text(data.hashtag);
        this.hashtag_info = new Text(data.hashtagInfoText);
    }
}
HashtagHeader.type = 'HashtagHeader';
export default HashtagHeader;
//# sourceMappingURL=HashtagHeader.js.map