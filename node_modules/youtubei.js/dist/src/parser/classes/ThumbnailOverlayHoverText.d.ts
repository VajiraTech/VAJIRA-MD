import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ThumbnailOverlayHoverText extends YTNode {
    static type: string;
    text: Text;
    icon_type: string;
    constructor(data: any);
}
export default ThumbnailOverlayHoverText;
