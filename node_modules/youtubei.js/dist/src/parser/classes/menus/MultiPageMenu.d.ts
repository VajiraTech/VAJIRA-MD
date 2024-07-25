import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class MultiPageMenu extends YTNode {
    static type: string;
    header: import("../../helpers.js").SuperParsedResult<YTNode>;
    sections: import("../../helpers.js").SuperParsedResult<YTNode>;
    style: string;
    constructor(data: RawNode);
}
export default MultiPageMenu;
