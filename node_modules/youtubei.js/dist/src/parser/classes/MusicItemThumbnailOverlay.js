import Parser from '../index.js';
import MusicPlayButton from './MusicPlayButton.js';
import { YTNode } from '../helpers.js';
class MusicItemThumbnailOverlay extends YTNode {
    constructor(data) {
        super();
        this.content = Parser.parseItem(data.content, MusicPlayButton);
        this.content_position = data.contentPosition;
        this.display_style = data.displayStyle;
    }
}
MusicItemThumbnailOverlay.type = 'MusicItemThumbnailOverlay';
export default MusicItemThumbnailOverlay;
//# sourceMappingURL=MusicItemThumbnailOverlay.js.map