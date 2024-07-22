var _Analytics_page;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import Element from '../classes/Element.js';
class Analytics {
    constructor(response) {
        var _a;
        _Analytics_page.set(this, void 0);
        __classPrivateFieldSet(this, _Analytics_page, Parser.parseResponse(response.data), "f");
        this.sections = (_a = __classPrivateFieldGet(this, _Analytics_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(Element).map((el) => el.model).flatMap((el) => !el ? [] : el);
    }
    get page() {
        return __classPrivateFieldGet(this, _Analytics_page, "f");
    }
}
_Analytics_page = new WeakMap();
export default Analytics;
//# sourceMappingURL=Analytics.js.map