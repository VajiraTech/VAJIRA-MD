import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class ThumbnailOverlayEndorsement extends YTNode {
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
    }
}
ThumbnailOverlayEndorsement.type = 'ThumbnailOverlayEndorsement';
export default ThumbnailOverlayEndorsement;
//# sourceMappingURL=ThumbnailOverlayEndorsement.js.map