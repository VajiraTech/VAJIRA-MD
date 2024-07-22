import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class UpdateDateTextAction extends YTNode {
    static type: string;
    date_text: string;
    constructor(data: RawNode);
}
export default UpdateDateTextAction;
