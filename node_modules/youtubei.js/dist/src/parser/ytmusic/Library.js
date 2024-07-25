var _Library_page, _Library_actions, _Library_continuation, _LibraryContinuation_page, _LibraryContinuation_actions, _LibraryContinuation_continuation;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser, { GridContinuation, MusicShelfContinuation, SectionListContinuation } from '../index.js';
import Grid from '../classes/Grid.js';
import MusicShelf from '../classes/MusicShelf.js';
import MusicSideAlignedItem from '../classes/MusicSideAlignedItem.js';
import NavigationEndpoint from '../classes/NavigationEndpoint.js';
import SectionList from '../classes/SectionList.js';
import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import MusicMultiSelectMenuItem from '../classes/menus/MusicMultiSelectMenuItem.js';
import MusicSortFilterButton from '../classes/MusicSortFilterButton.js';
import { InnertubeError } from '../../utils/Utils.js';
class Library {
    constructor(response, actions) {
        var _a, _b, _c, _d, _e;
        _Library_page.set(this, void 0);
        _Library_actions.set(this, void 0);
        _Library_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _Library_page, Parser.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Library_actions, actions, "f");
        const section_list = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(SectionList).first();
        this.header = (_b = section_list === null || section_list === void 0 ? void 0 : section_list.header) === null || _b === void 0 ? void 0 : _b.as(MusicSideAlignedItem);
        this.contents = (_c = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _c === void 0 ? void 0 : _c.as(Grid, MusicShelf);
        __classPrivateFieldSet(this, _Library_continuation, (_e = (_d = this.contents) === null || _d === void 0 ? void 0 : _d.find((list) => list.continuation)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
    }
    /**
     * Applies given sort option to the library items.
     */
    applySort(sort_by) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return __awaiter(this, void 0, void 0, function* () {
            let target_item;
            if (typeof sort_by === 'string') {
                const button = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(MusicSortFilterButton).first();
                const options = (_b = button === null || button === void 0 ? void 0 : button.menu) === null || _b === void 0 ? void 0 : _b.options.filter((item) => item instanceof MusicMultiSelectMenuItem);
                target_item = options === null || options === void 0 ? void 0 : options.find((item) => item.title === sort_by);
                if (!target_item)
                    throw new InnertubeError(`Sort option "${sort_by}" not found`, { available_filters: options.map((item) => item.title) });
            }
            else if (sort_by instanceof MusicMultiSelectMenuItem) {
                target_item = sort_by;
            }
            if (!target_item)
                throw new InnertubeError('Invalid sort option');
            if (target_item.selected)
                return this;
            const cmd = (_f = (_e = (_d = (_c = target_item.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commands) === null || _e === void 0 ? void 0 : _e.find((cmd) => cmd.browseSectionListReloadEndpoint)) === null || _f === void 0 ? void 0 : _f.browseSectionListReloadEndpoint;
            if (!cmd)
                throw new InnertubeError('Failed to find sort option command');
            const response = yield __classPrivateFieldGet(this, _Library_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: cmd.continuation.reloadContinuationData.continuation,
                parse: true
            });
            const previously_selected_item = (_h = (_g = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _g === void 0 ? void 0 : _g.getType(MusicMultiSelectMenuItem)) === null || _h === void 0 ? void 0 : _h.find((item) => item.selected);
            if (previously_selected_item)
                previously_selected_item.selected = false;
            target_item.selected = true;
            this.contents = (_k = (_j = response.continuation_contents) === null || _j === void 0 ? void 0 : _j.as(SectionListContinuation).contents) === null || _k === void 0 ? void 0 : _k.as(Grid, MusicShelf);
            return this;
        });
    }
    /**
     * Applies given filter to the library.
     */
    applyFilter(filter) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            let target_chip;
            const chip_cloud = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(ChipCloud).first();
            if (typeof filter === 'string') {
                target_chip = chip_cloud === null || chip_cloud === void 0 ? void 0 : chip_cloud.chips.get({ text: filter });
                if (!target_chip)
                    throw new InnertubeError(`Filter "${filter}" not found`, { available_filters: this.filters });
            }
            else if (filter instanceof ChipCloudChip) {
                target_chip = filter;
            }
            if (!target_chip)
                throw new InnertubeError('Invalid filter', filter);
            const target_cmd = new NavigationEndpoint((_d = (_c = (_b = target_chip.endpoint) === null || _b === void 0 ? void 0 : _b.payload) === null || _c === void 0 ? void 0 : _c.commands) === null || _d === void 0 ? void 0 : _d[0]);
            const response = yield target_cmd.call(__classPrivateFieldGet(this, _Library_actions, "f"), { client: 'YTMUSIC' });
            return new Library(response, __classPrivateFieldGet(this, _Library_actions, "f"));
        });
    }
    /**
     * Retrieves continuation of the library items.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Library_continuation, "f"))
                throw new InnertubeError('No continuation available');
            const page = yield __classPrivateFieldGet(this, _Library_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: __classPrivateFieldGet(this, _Library_continuation, "f")
            });
            return new LibraryContinuation(page, __classPrivateFieldGet(this, _Library_actions, "f"));
        });
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _Library_continuation, "f");
    }
    get sort_options() {
        var _a, _b;
        const button = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(MusicSortFilterButton).first();
        const options = (_b = button === null || button === void 0 ? void 0 : button.menu) === null || _b === void 0 ? void 0 : _b.options.filter((item) => item instanceof MusicMultiSelectMenuItem);
        return options.map((item) => item.title);
    }
    get filters() {
        var _a, _b;
        return ((_b = (_a = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(ChipCloud)) === null || _b === void 0 ? void 0 : _b.first().chips.map((chip) => chip.text)) || [];
    }
    get page() {
        return __classPrivateFieldGet(this, _Library_page, "f");
    }
}
_Library_page = new WeakMap(), _Library_actions = new WeakMap(), _Library_continuation = new WeakMap();
class LibraryContinuation {
    constructor(response, actions) {
        var _a, _b;
        _LibraryContinuation_page.set(this, void 0);
        _LibraryContinuation_actions.set(this, void 0);
        _LibraryContinuation_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _LibraryContinuation_page, Parser.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _LibraryContinuation_actions, actions, "f");
        if (!__classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents)
            throw new InnertubeError('No continuation contents found');
        this.contents = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents.as(MusicShelfContinuation, GridContinuation);
        __classPrivateFieldSet(this, _LibraryContinuation_continuation, ((_a = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _a === void 0 ? void 0 : _a.key('continuation').isNull())
            ? null : (_b = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _b === void 0 ? void 0 : _b.key('continuation').string(), "f");
    }
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _LibraryContinuation_continuation, "f"))
                throw new InnertubeError('No continuation available');
            const response = yield __classPrivateFieldGet(this, _LibraryContinuation_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: __classPrivateFieldGet(this, _LibraryContinuation_continuation, "f")
            });
            return new LibraryContinuation(response, __classPrivateFieldGet(this, _LibraryContinuation_actions, "f"));
        });
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _LibraryContinuation_continuation, "f");
    }
    get page() {
        return __classPrivateFieldGet(this, _LibraryContinuation_page, "f");
    }
}
_LibraryContinuation_page = new WeakMap(), _LibraryContinuation_actions = new WeakMap(), _LibraryContinuation_continuation = new WeakMap();
export { LibraryContinuation };
export default Library;
//# sourceMappingURL=Library.js.map