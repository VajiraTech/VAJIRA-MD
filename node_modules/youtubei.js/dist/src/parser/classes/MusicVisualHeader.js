import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import Menu from './menus/Menu.js';
class MusicVisualHeader extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text(data.title);
        this.thumbnails = data.thumbnail ? Thumbnail.fromResponse((_a = data.thumbnail.musicThumbnailRenderer) === null || _a === void 0 ? void 0 : _a.thumbnail) : [];
        this.menu = Parser.parseItem(data.menu, Menu);
        this.foreground_thumbnails = data.foregroundThumbnail ? Thumbnail.fromResponse((_b = data.foregroundThumbnail.musicThumbnailRenderer) === null || _b === void 0 ? void 0 : _b.thumbnail) : [];
    }
}
MusicVisualHeader.type = 'MusicVisualHeader';
export default MusicVisualHeader;
//# sourceMappingURL=MusicVisualHeader.js.map