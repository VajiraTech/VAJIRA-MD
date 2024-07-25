import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import Menu from './menus/Menu.js';
declare class MusicVisualHeader extends YTNode {
    static type: string;
    title: Text;
    thumbnails: Thumbnail[];
    menu: Menu | null;
    foreground_thumbnails: Thumbnail[];
    constructor(data: any);
}
export default MusicVisualHeader;
