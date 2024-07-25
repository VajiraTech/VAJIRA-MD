import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class PdgCommentChip extends YTNode {
    static type: string;
    text: Text;
    color_pallette: {
        background_color: string;
        foreground_title_color: string;
    };
    icon_type: string;
    constructor(data: RawNode);
}
export default PdgCommentChip;
