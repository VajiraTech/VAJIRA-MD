var _TimeWatched_page;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import ItemSection from '../classes/ItemSection.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';
import { InnertubeError } from '../../utils/Utils.js';
class TimeWatched {
    constructor(response) {
        var _a;
        _TimeWatched_page.set(this, void 0);
        __classPrivateFieldSet(this, _TimeWatched_page, Parser.parseResponse(response.data), "f");
        if (!__classPrivateFieldGet(this, _TimeWatched_page, "f").contents)
            throw new InnertubeError('Page contents not found');
        const tab = __classPrivateFieldGet(this, _TimeWatched_page, "f").contents.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });
        if (!tab)
            throw new InnertubeError('Could not find target tab.');
        this.contents = (_a = tab.content) === null || _a === void 0 ? void 0 : _a.as(SectionList).contents.as(ItemSection);
    }
    get page() {
        return __classPrivateFieldGet(this, _TimeWatched_page, "f");
    }
}
_TimeWatched_page = new WeakMap();
export default TimeWatched;
//# sourceMappingURL=TimeWatched.js.map