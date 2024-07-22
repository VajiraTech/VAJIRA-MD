var _AccountInfo_page;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import AccountSectionList from '../classes/AccountSectionList.js';
import { InnertubeError } from '../../utils/Utils.js';
class AccountInfo {
    constructor(response) {
        _AccountInfo_page.set(this, void 0);
        __classPrivateFieldSet(this, _AccountInfo_page, Parser.parseResponse(response.data), "f");
        if (!__classPrivateFieldGet(this, _AccountInfo_page, "f").contents)
            throw new InnertubeError('Page contents not found');
        const account_section_list = __classPrivateFieldGet(this, _AccountInfo_page, "f").contents.array().as(AccountSectionList).first();
        if (!account_section_list)
            throw new InnertubeError('Account section list not found');
        this.contents = account_section_list.contents;
        this.footers = account_section_list.footers;
    }
    get page() {
        return __classPrivateFieldGet(this, _AccountInfo_page, "f");
    }
}
_AccountInfo_page = new WeakMap();
export default AccountInfo;
//# sourceMappingURL=AccountInfo.js.map