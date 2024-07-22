var _Artist_page, _Artist_actions;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';
import MusicShelf from '../classes/MusicShelf.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf.js';
import MusicImmersiveHeader from '../classes/MusicImmersiveHeader.js';
import MusicVisualHeader from '../classes/MusicVisualHeader.js';
import MusicHeader from '../classes/MusicHeader.js';
class Artist {
    constructor(response, actions) {
        var _a, _b, _c;
        _Artist_page.set(this, void 0);
        _Artist_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Artist_page, Parser.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Artist_actions, actions, "f");
        this.header = (_a = this.page.header) === null || _a === void 0 ? void 0 : _a.item().as(MusicImmersiveHeader, MusicVisualHeader, MusicHeader);
        const music_shelf = ((_b = __classPrivateFieldGet(this, _Artist_page, "f").contents_memo) === null || _b === void 0 ? void 0 : _b.getType(MusicShelf)) || [];
        const music_carousel_shelf = ((_c = __classPrivateFieldGet(this, _Artist_page, "f").contents_memo) === null || _c === void 0 ? void 0 : _c.getType(MusicCarouselShelf)) || [];
        this.sections = [...music_shelf, ...music_carousel_shelf];
    }
    getAllSongs() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const music_shelves = this.sections.filter((section) => section.type === 'MusicShelf');
            if (!music_shelves.length)
                throw new InnertubeError('Could not find any node of type MusicShelf.');
            const shelf = music_shelves.find((shelf) => shelf.title.toString() === 'Songs');
            if (!shelf)
                throw new InnertubeError('Could not find target shelf (Songs).');
            if (!shelf.endpoint)
                throw new InnertubeError('Target shelf (Songs) did not have an endpoint.');
            const page = yield shelf.endpoint.call(__classPrivateFieldGet(this, _Artist_actions, "f"), { client: 'YTMUSIC', parse: true });
            const contents = (_b = (_a = page.contents_memo) === null || _a === void 0 ? void 0 : _a.getType(MusicPlaylistShelf)) === null || _b === void 0 ? void 0 : _b.first();
            return contents;
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _Artist_page, "f");
    }
}
_Artist_page = new WeakMap(), _Artist_actions = new WeakMap();
export default Artist;
//# sourceMappingURL=Artist.js.map