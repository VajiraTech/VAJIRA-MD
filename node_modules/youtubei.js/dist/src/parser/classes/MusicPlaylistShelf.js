import Parser from '../index.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import { YTNode } from '../helpers.js';
class MusicPlaylistShelf extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.playlist_id = data.playlistId;
        this.contents = Parser.parseArray(data.contents, MusicResponsiveListItem);
        this.collapsed_item_count = data.collapsedItemCount;
        this.continuation = ((_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
    }
}
MusicPlaylistShelf.type = 'MusicPlaylistShelf';
export default MusicPlaylistShelf;
//# sourceMappingURL=MusicPlaylistShelf.js.map