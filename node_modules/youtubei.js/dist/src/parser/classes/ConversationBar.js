import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Message from './Message.js';
class ConversationBar extends YTNode {
    constructor(data) {
        super();
        this.availability_message = Parser.parseItem(data.availabilityMessage, Message);
    }
}
ConversationBar.type = 'ConversationBar';
export default ConversationBar;
//# sourceMappingURL=ConversationBar.js.map