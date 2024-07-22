import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class LiveChatActionPanel extends YTNode {
    static type: string;
    id: string;
    contents: import("../../helpers.js").SuperParsedResult<YTNode>;
    target_id: string;
    constructor(data: RawNode);
}
export default LiveChatActionPanel;
