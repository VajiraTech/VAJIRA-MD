import { YTNode } from '../helpers.js';
declare class PlaylistVideoList extends YTNode {
    static type: string;
    id: string;
    is_editable: boolean;
    can_reorder: boolean;
    videos: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default PlaylistVideoList;
