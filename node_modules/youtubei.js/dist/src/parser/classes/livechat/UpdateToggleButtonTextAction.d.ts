import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class UpdateToggleButtonTextAction extends YTNode {
    static type: string;
    default_text: string;
    toggled_text: string;
    button_id: string;
    constructor(data: RawNode);
}
export default UpdateToggleButtonTextAction;
