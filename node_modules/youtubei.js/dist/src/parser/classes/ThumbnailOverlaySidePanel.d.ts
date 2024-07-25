import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ThumbnailOverlaySidePanel extends YTNode {
    static type: string;
    text: Text;
    icon_type: string;
    constructor(data: any);
}
export default ThumbnailOverlaySidePanel;
