var _Album_page;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import MicroformatData from '../classes/MicroformatData.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicDetailHeader from '../classes/MusicDetailHeader.js';
import MusicShelf from '../classes/MusicShelf.js';
class Album {
    constructor(response) {
        var _a, _b, _c;
        _Album_page.set(this, void 0);
        __classPrivateFieldSet(this, _Album_page, Parser.parseResponse(response.data), "f");
        this.header = (_a = __classPrivateFieldGet(this, _Album_page, "f").header) === null || _a === void 0 ? void 0 : _a.item().as(MusicDetailHeader);
        this.url = ((_b = __classPrivateFieldGet(this, _Album_page, "f").microformat) === null || _b === void 0 ? void 0 : _b.as(MicroformatData).url_canonical) || null;
        if (!__classPrivateFieldGet(this, _Album_page, "f").contents_memo)
            throw new Error('No contents found in the response');
        this.contents = (_c = __classPrivateFieldGet(this, _Album_page, "f").contents_memo.getType(MusicShelf)) === null || _c === void 0 ? void 0 : _c.first().contents;
        this.sections = __classPrivateFieldGet(this, _Album_page, "f").contents_memo.getType(MusicCarouselShelf) || [];
    }
    get page() {
        return __classPrivateFieldGet(this, _Album_page, "f");
    }
}
_Album_page = new WeakMap();
export default Album;
//# sourceMappingURL=Album.js.map