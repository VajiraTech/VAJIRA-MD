var _NotificationsMenu_page, _NotificationsMenu_actions;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import ContinuationItem from '../classes/ContinuationItem.js';
import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader.js';
import Notification from '../classes/Notification.js';
import { InnertubeError } from '../../utils/Utils.js';
class NotificationsMenu {
    constructor(actions, response) {
        _NotificationsMenu_page.set(this, void 0);
        _NotificationsMenu_actions.set(this, void 0);
        __classPrivateFieldSet(this, _NotificationsMenu_actions, actions, "f");
        __classPrivateFieldSet(this, _NotificationsMenu_page, Parser.parseResponse(response.data), "f");
        this.header = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(SimpleMenuHeader).first();
        this.contents = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(Notification);
    }
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const continuation = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(ContinuationItem).first();
            if (!continuation)
                throw new InnertubeError('Continuation not found');
            const response = yield continuation.endpoint.call(__classPrivateFieldGet(this, _NotificationsMenu_actions, "f"), { parse: false });
            return new NotificationsMenu(__classPrivateFieldGet(this, _NotificationsMenu_actions, "f"), response);
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _NotificationsMenu_page, "f");
    }
}
_NotificationsMenu_page = new WeakMap(), _NotificationsMenu_actions = new WeakMap();
export default NotificationsMenu;
//# sourceMappingURL=NotificationsMenu.js.map