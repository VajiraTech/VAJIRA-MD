import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AuthorCommentBadge extends YTNode {
    #private;
    static type: string;
    icon_type: string | null;
    tooltip: string;
    style?: string;
    constructor(data: RawNode);
    get orig_badge(): RawNode;
}
export default AuthorCommentBadge;
