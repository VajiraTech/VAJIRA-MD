import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
    static type: string;
    deleted_state_message: Text;
    channel_id: string;
    constructor(data: RawNode);
}
export default MarkChatItemsByAuthorAsDeletedAction;
