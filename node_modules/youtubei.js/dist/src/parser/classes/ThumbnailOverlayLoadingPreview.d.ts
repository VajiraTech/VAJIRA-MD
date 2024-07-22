import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ThumbnailOverlayLoadingPreview extends YTNode {
    static type: string;
    text: Text;
    constructor(data: any);
}
export default ThumbnailOverlayLoadingPreview;
