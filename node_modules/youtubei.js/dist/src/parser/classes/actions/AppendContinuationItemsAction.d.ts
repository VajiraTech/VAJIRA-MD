import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AppendContinuationItemsAction extends YTNode {
    static type: string;
    items: import("../../helpers.js").SuperParsedResult<YTNode>;
    target: string;
    constructor(data: RawNode);
}
export default AppendContinuationItemsAction;
