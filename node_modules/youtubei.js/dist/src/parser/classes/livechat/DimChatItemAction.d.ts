import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class DimChatItemAction extends YTNode {
    static type: string;
    client_assigned_id: string;
    constructor(data: RawNode);
}
export default DimChatItemAction;
