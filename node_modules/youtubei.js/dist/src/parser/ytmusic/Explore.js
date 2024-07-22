var _Explore_page;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import Grid from '../classes/Grid.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicNavigationButton from '../classes/MusicNavigationButton.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';
import { InnertubeError } from '../../utils/Utils.js';
class Explore {
    constructor(response) {
        var _a, _b, _c;
        _Explore_page.set(this, void 0);
        __classPrivateFieldSet(this, _Explore_page, Parser.parseResponse(response.data), "f");
        const tab = (_a = __classPrivateFieldGet(this, _Explore_page, "f").contents) === null || _a === void 0 ? void 0 : _a.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });
        if (!tab)
            throw new InnertubeError('Could not find target tab.');
        const section_list = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList);
        if (!section_list)
            throw new InnertubeError('Target tab did not have any content.');
        this.top_buttons = ((_c = section_list.contents.firstOfType(Grid)) === null || _c === void 0 ? void 0 : _c.items.as(MusicNavigationButton)) || [];
        this.sections = section_list.contents.filterType(MusicCarouselShelf);
    }
    get page() {
        return __classPrivateFieldGet(this, _Explore_page, "f");
    }
}
_Explore_page = new WeakMap();
export default Explore;
//# sourceMappingURL=Explore.js.map