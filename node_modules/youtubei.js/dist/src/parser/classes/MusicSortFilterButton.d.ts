import { YTNode } from '../helpers.js';
import MusicMultiSelectMenu from './menus/MusicMultiSelectMenu.js';
declare class MusicSortFilterButton extends YTNode {
    static type: string;
    title: string;
    icon_type: string;
    menu: MusicMultiSelectMenu | null;
    constructor(data: any);
}
export default MusicSortFilterButton;
