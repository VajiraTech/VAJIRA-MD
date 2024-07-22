var _Playlist_instances, _Playlist_page, _Playlist_actions, _Playlist_continuation, _Playlist_last_fetched_suggestions, _Playlist_suggestions_continuation, _Playlist_fetchSuggestions;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser, { MusicPlaylistShelfContinuation, SectionListContinuation } from '../index.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicDetailHeader from '../classes/MusicDetailHeader.js';
import MusicEditablePlaylistDetailHeader from '../classes/MusicEditablePlaylistDetailHeader.js';
import MusicPlaylistShelf from '../classes/MusicPlaylistShelf.js';
import MusicShelf from '../classes/MusicShelf.js';
import SectionList from '../classes/SectionList.js';
import { InnertubeError } from '../../utils/Utils.js';
class Playlist {
    constructor(response, actions) {
        var _a, _b, _c, _d, _e, _f, _g;
        _Playlist_instances.add(this);
        _Playlist_page.set(this, void 0);
        _Playlist_actions.set(this, void 0);
        _Playlist_continuation.set(this, void 0);
        _Playlist_last_fetched_suggestions.set(this, void 0);
        _Playlist_suggestions_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _Playlist_actions, actions, "f");
        __classPrivateFieldSet(this, _Playlist_page, Parser.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Playlist_last_fetched_suggestions, null, "f");
        __classPrivateFieldSet(this, _Playlist_suggestions_continuation, null, "f");
        if (__classPrivateFieldGet(this, _Playlist_page, "f").continuation_contents) {
            const data = (_a = __classPrivateFieldGet(this, _Playlist_page, "f").continuation_contents) === null || _a === void 0 ? void 0 : _a.as(MusicPlaylistShelfContinuation);
            this.items = data.contents;
            __classPrivateFieldSet(this, _Playlist_continuation, data.continuation, "f");
        }
        else {
            if (((_b = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _b === void 0 ? void 0 : _b.item().type) === 'MusicEditablePlaylistDetailHeader') {
                this.header = (_d = (_c = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _c === void 0 ? void 0 : _c.item().as(MusicEditablePlaylistDetailHeader).header) === null || _d === void 0 ? void 0 : _d.as(MusicDetailHeader);
            }
            else {
                this.header = (_e = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _e === void 0 ? void 0 : _e.item().as(MusicDetailHeader);
            }
            this.items = ((_f = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo) === null || _f === void 0 ? void 0 : _f.getType(MusicPlaylistShelf).first().contents) || null;
            __classPrivateFieldSet(this, _Playlist_continuation, ((_g = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo) === null || _g === void 0 ? void 0 : _g.getType(MusicPlaylistShelf).first().continuation) || null, "f");
        }
    }
    /**
     * Retrieves playlist items continuation.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Playlist_continuation, "f"))
                throw new InnertubeError('Continuation not found.');
            const response = yield __classPrivateFieldGet(this, _Playlist_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: __classPrivateFieldGet(this, _Playlist_continuation, "f")
            });
            return new Playlist(response, __classPrivateFieldGet(this, _Playlist_actions, "f"));
        });
    }
    /**
     * Retrieves related playlists
     */
    getRelated() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            let section_continuation = (_b = (_a = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(SectionList)) === null || _b === void 0 ? void 0 : _b[0].continuation;
            while (section_continuation) {
                const data = yield __classPrivateFieldGet(this, _Playlist_actions, "f").execute('/browse', {
                    client: 'YTMUSIC',
                    continuation: section_continuation,
                    parse: true
                });
                const section_list = (_c = data.continuation_contents) === null || _c === void 0 ? void 0 : _c.as(SectionListContinuation);
                const sections = (_d = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _d === void 0 ? void 0 : _d.as(MusicCarouselShelf, MusicShelf);
                const related = (_e = sections === null || sections === void 0 ? void 0 : sections.matchCondition((section) => section.is(MusicCarouselShelf))) === null || _e === void 0 ? void 0 : _e.as(MusicCarouselShelf);
                if (related)
                    return related;
                section_continuation = section_list === null || section_list === void 0 ? void 0 : section_list.continuation;
            }
            throw new InnertubeError('Target section not found.');
        });
    }
    getSuggestions(refresh = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const require_fetch = refresh || !__classPrivateFieldGet(this, _Playlist_last_fetched_suggestions, "f");
            const fetch_promise = require_fetch ? __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_fetchSuggestions).call(this) : Promise.resolve(null);
            const fetch_result = yield fetch_promise;
            if (fetch_result) {
                __classPrivateFieldSet(this, _Playlist_last_fetched_suggestions, fetch_result.items, "f");
                __classPrivateFieldSet(this, _Playlist_suggestions_continuation, fetch_result.continuation, "f");
            }
            return (fetch_result === null || fetch_result === void 0 ? void 0 : fetch_result.items) || __classPrivateFieldGet(this, _Playlist_last_fetched_suggestions, "f");
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _Playlist_page, "f");
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _Playlist_continuation, "f");
    }
}
_Playlist_page = new WeakMap(), _Playlist_actions = new WeakMap(), _Playlist_continuation = new WeakMap(), _Playlist_last_fetched_suggestions = new WeakMap(), _Playlist_suggestions_continuation = new WeakMap(), _Playlist_instances = new WeakSet(), _Playlist_fetchSuggestions = function _Playlist_fetchSuggestions() {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        const continuation = __classPrivateFieldGet(this, _Playlist_suggestions_continuation, "f") || ((_b = (_a = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.get('SectionList')) === null || _b === void 0 ? void 0 : _b[0].as(SectionList).continuation);
        if (continuation) {
            const page = yield __classPrivateFieldGet(this, _Playlist_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: continuation,
                parse: true
            });
            const section_list = (_c = page.continuation_contents) === null || _c === void 0 ? void 0 : _c.as(SectionListContinuation);
            const sections = (_d = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _d === void 0 ? void 0 : _d.as(MusicCarouselShelf, MusicShelf);
            const suggestions = (_e = sections === null || sections === void 0 ? void 0 : sections.matchCondition((section) => section.is(MusicShelf))) === null || _e === void 0 ? void 0 : _e.as(MusicShelf);
            return {
                items: (suggestions === null || suggestions === void 0 ? void 0 : suggestions.contents) || [],
                continuation: (suggestions === null || suggestions === void 0 ? void 0 : suggestions.continuation) || null
            };
        }
        return {
            items: [],
            continuation: null
        };
    });
};
export default Playlist;
//# sourceMappingURL=Playlist.js.map