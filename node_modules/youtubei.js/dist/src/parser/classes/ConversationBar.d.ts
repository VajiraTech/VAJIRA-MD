import { YTNode } from '../helpers.js';
import { RawNode } from '../index.js';
import Message from './Message.js';
declare class ConversationBar extends YTNode {
    static type: string;
    availability_message: Message | null;
    constructor(data: RawNode);
}
export default ConversationBar;
