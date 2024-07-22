import Parser from '../index.js';
import AccountChannel from './AccountChannel.js';
import AccountItemSection from './AccountItemSection.js';
import { YTNode } from '../helpers.js';
class AccountSectionList extends YTNode {
    constructor(data) {
        super();
        this.contents = Parser.parseItem(data.contents[0], AccountItemSection);
        this.footers = Parser.parseItem(data.footers[0], AccountChannel);
    }
}
AccountSectionList.type = 'AccountSectionList';
export default AccountSectionList;
//# sourceMappingURL=AccountSectionList.js.map