import { YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
class LiveChatBannerPoll extends YTNode {
    constructor(data) {
        super();
        this.poll_question = new Text(data.pollQuestion);
        this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
        this.choices = data.pollChoices.map((choice) => ({
            option_id: choice.pollOptionId,
            text: new Text(choice.text).toString()
        }));
        this.collapsed_state_entity_key = data.collapsedStateEntityKey;
        this.live_chat_poll_state_entity_key = data.liveChatPollStateEntityKey;
        this.context_menu_button = Parser.parseItem(data.contextMenuButton);
    }
}
LiveChatBannerPoll.type = 'LiveChatBannerPoll';
export default LiveChatBannerPoll;
//# sourceMappingURL=LiveChatBannerPoll.js.map