import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class AccountItemSectionHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
AccountItemSectionHeader.type = 'AccountItemSectionHeader';
export default AccountItemSectionHeader;
//# sourceMappingURL=AccountItemSectionHeader.js.map