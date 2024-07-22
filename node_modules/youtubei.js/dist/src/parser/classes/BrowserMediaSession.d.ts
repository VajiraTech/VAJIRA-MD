import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class BrowserMediaSession extends YTNode {
    static type: string;
    album: Text;
    thumbnails: Thumbnail[];
    constructor(data: any);
}
export default BrowserMediaSession;
