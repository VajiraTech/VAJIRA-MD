import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import Parser from '../../../index.js';
import { YTNode } from '../../../helpers.js';
class PollHeader extends YTNode {
    constructor(data) {
        super();
        this.poll_question = new Text(data.pollQuestion);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.metadata = new Text(data.metadataText);
        this.live_chat_poll_type = data.liveChatPollType;
        this.context_menu_button = Parser.parseItem(data.contextMenuButton);
    }
}
PollHeader.type = 'PollHeader';
export default PollHeader;
//# sourceMappingURL=PollHeader.js.map