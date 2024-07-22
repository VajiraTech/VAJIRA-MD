import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import { YTNode } from '../helpers.js';
declare class MusicPlaylistShelf extends YTNode {
    static type: string;
    playlist_id: string;
    contents: import("../helpers.js").ObservedArray<MusicResponsiveListItem>;
    collapsed_item_count: number;
    continuation: string | null;
    constructor(data: any);
}
export default MusicPlaylistShelf;
