var _ItemMenu_page, _ItemMenu_actions, _ItemMenu_items;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Button from '../classes/Button.js';
import Menu from '../classes/menus/Menu.js';
import MenuServiceItem from '../classes/menus/MenuServiceItem.js';
import { InnertubeError } from '../../utils/Utils.js';
class ItemMenu {
    constructor(data, actions) {
        _ItemMenu_page.set(this, void 0);
        _ItemMenu_actions.set(this, void 0);
        _ItemMenu_items.set(this, void 0);
        __classPrivateFieldSet(this, _ItemMenu_page, data, "f");
        __classPrivateFieldSet(this, _ItemMenu_actions, actions, "f");
        const menu = data === null || data === void 0 ? void 0 : data.live_chat_item_context_menu_supported_renderers;
        if (!menu || !menu.is(Menu))
            throw new InnertubeError('Response did not have a "live_chat_item_context_menu_supported_renderers" property. The call may have failed.');
        __classPrivateFieldSet(this, _ItemMenu_items, menu.as(Menu).items, "f");
    }
    selectItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let endpoint;
            if (item instanceof Button) {
                if (!item.endpoint)
                    throw new InnertubeError('Item does not have an endpoint.');
                endpoint = item.endpoint;
            }
            else {
                const button = __classPrivateFieldGet(this, _ItemMenu_items, "f").find((button) => {
                    if (!button.is(MenuServiceItem)) {
                        return false;
                    }
                    const menuServiceItem = button.as(MenuServiceItem);
                    return menuServiceItem.icon_type === item;
                });
                if (!button || !button.is(MenuServiceItem))
                    throw new InnertubeError(`Button "${item}" not found.`);
                endpoint = button.endpoint;
            }
            if (!endpoint)
                throw new InnertubeError('Target button does not have an endpoint.');
            const response = yield endpoint.call(__classPrivateFieldGet(this, _ItemMenu_actions, "f"), { parse: true });
            return response;
        });
    }
    items() {
        return __classPrivateFieldGet(this, _ItemMenu_items, "f");
    }
    page() {
        return __classPrivateFieldGet(this, _ItemMenu_page, "f");
    }
}
_ItemMenu_page = new WeakMap(), _ItemMenu_actions = new WeakMap(), _ItemMenu_items = new WeakMap();
export default ItemMenu;
//# sourceMappingURL=ItemMenu.js.map