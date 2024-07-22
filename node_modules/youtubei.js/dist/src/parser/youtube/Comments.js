var _Comments_page, _Comments_actions, _Comments_continuation;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';
import { observe } from '../helpers.js';
import CommentsHeader from '../classes/comments/CommentsHeader.js';
import CommentSimplebox from '../classes/comments/CommentSimplebox.js';
import CommentThread from '../classes/comments/CommentThread.js';
import ContinuationItem from '../classes/ContinuationItem.js';
class Comments {
    constructor(actions, data, already_parsed = false) {
        var _a, _b, _c;
        _Comments_page.set(this, void 0);
        _Comments_actions.set(this, void 0);
        _Comments_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _Comments_page, already_parsed ? data : Parser.parseResponse(data), "f");
        __classPrivateFieldSet(this, _Comments_actions, actions, "f");
        const contents = __classPrivateFieldGet(this, _Comments_page, "f").on_response_received_endpoints;
        if (!contents)
            throw new InnertubeError('Comments page did not have any content.');
        const header_node = contents.at(0);
        const body_node = contents.at(1);
        this.header = (_a = header_node === null || header_node === void 0 ? void 0 : header_node.contents) === null || _a === void 0 ? void 0 : _a.firstOfType(CommentsHeader);
        const threads = ((_b = body_node === null || body_node === void 0 ? void 0 : body_node.contents) === null || _b === void 0 ? void 0 : _b.filterType(CommentThread)) || [];
        this.contents = observe(threads.map((thread) => {
            var _a;
            (_a = thread.comment) === null || _a === void 0 ? void 0 : _a.setActions(__classPrivateFieldGet(this, _Comments_actions, "f"));
            thread.setActions(__classPrivateFieldGet(this, _Comments_actions, "f"));
            return thread;
        }));
        __classPrivateFieldSet(this, _Comments_continuation, (_c = body_node === null || body_node === void 0 ? void 0 : body_node.contents) === null || _c === void 0 ? void 0 : _c.firstOfType(ContinuationItem), "f");
    }
    /**
     * Applies given sort option to the comments.
     * @param sort - Sort type.
     */
    applySort(sort) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.header)
                throw new InnertubeError('Page header is missing. Cannot apply sort option.');
            let button;
            if (sort === 'TOP_COMMENTS') {
                button = (_b = (_a = this.header.sort_menu) === null || _a === void 0 ? void 0 : _a.sub_menu_items) === null || _b === void 0 ? void 0 : _b.at(0);
            }
            else if (sort === 'NEWEST_FIRST') {
                button = (_d = (_c = this.header.sort_menu) === null || _c === void 0 ? void 0 : _c.sub_menu_items) === null || _d === void 0 ? void 0 : _d.at(1);
            }
            if (!button)
                throw new InnertubeError('Could not find target button.');
            if (button.selected)
                return this;
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _Comments_actions, "f"), { parse: true });
            return new Comments(__classPrivateFieldGet(this, _Comments_actions, "f"), response, true);
        });
    }
    /**
     * Creates a top-level comment.
     * @param text - Comment text.
     */
    createComment(text) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.header)
                throw new InnertubeError('Page header is missing. Cannot create comment.');
            const button = (_a = this.header.create_renderer) === null || _a === void 0 ? void 0 : _a.as(CommentSimplebox).submit_button;
            if (!button)
                throw new InnertubeError('Could not find target button. You are probably not logged in.');
            if (!button.endpoint)
                throw new InnertubeError('Button does not have an endpoint.');
            const response = yield button.endpoint.call(__classPrivateFieldGet(this, _Comments_actions, "f"), { commentText: text });
            return response;
        });
    }
    /**
     * Retrieves next batch of comments.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Comments_continuation, "f"))
                throw new InnertubeError('Continuation not found');
            const data = yield __classPrivateFieldGet(this, _Comments_continuation, "f").endpoint.call(__classPrivateFieldGet(this, _Comments_actions, "f"), { parse: true });
            // Copy the previous page so we can keep the header.
            const page = Object.assign({}, __classPrivateFieldGet(this, _Comments_page, "f"));
            if (!page.on_response_received_endpoints || !data.on_response_received_endpoints)
                throw new InnertubeError('Invalid reponse format, missing on_response_received_endpoints.');
            // Remove previous items and append the continuation.
            page.on_response_received_endpoints.pop();
            page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);
            return new Comments(__classPrivateFieldGet(this, _Comments_actions, "f"), page, true);
        });
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _Comments_continuation, "f");
    }
    get page() {
        return __classPrivateFieldGet(this, _Comments_page, "f");
    }
}
_Comments_page = new WeakMap(), _Comments_actions = new WeakMap(), _Comments_continuation = new WeakMap();
export default Comments;
//# sourceMappingURL=Comments.js.map