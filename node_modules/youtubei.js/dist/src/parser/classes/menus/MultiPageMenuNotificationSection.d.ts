import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class MultiPageMenuNotificationSection extends YTNode {
    static type: string;
    items: import("../../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: RawNode);
    get contents(): import("../../helpers.js").SuperParsedResult<YTNode>;
}
export default MultiPageMenuNotificationSection;
