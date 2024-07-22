import MusicPlayButton from './MusicPlayButton.js';
import { YTNode } from '../helpers.js';
declare class MusicItemThumbnailOverlay extends YTNode {
    static type: string;
    content: MusicPlayButton | null;
    content_position: any;
    display_style: string;
    constructor(data: any);
}
export default MusicItemThumbnailOverlay;
