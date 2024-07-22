import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class RemoveChatItemAction extends YTNode {
    static type: string;
    target_item_id: string;
    constructor(data: RawNode);
}
export default RemoveChatItemAction;
