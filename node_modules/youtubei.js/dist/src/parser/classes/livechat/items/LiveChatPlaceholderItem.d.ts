import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
declare class LiveChatPlaceholderItem extends YTNode {
    static type: string;
    id: string;
    timestamp: number;
    constructor(data: RawNode);
}
export default LiveChatPlaceholderItem;
