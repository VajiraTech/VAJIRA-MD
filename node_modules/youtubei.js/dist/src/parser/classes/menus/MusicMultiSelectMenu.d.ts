import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.js';
import MusicMenuItemDivider from './MusicMenuItemDivider.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class MusicMultiSelectMenu extends YTNode {
    static type: string;
    title: string;
    options: Array<MusicMultiSelectMenuItem | MusicMenuItemDivider>;
    constructor(data: RawNode);
}
export default MusicMultiSelectMenu;
