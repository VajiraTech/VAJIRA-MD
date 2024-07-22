import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import AccountItemSectionHeader from './AccountItemSectionHeader.js';
import { YTNode } from '../helpers.js';
class AccountItem {
    constructor(data) {
        this.account_name = new Text(data.accountName);
        this.account_photo = Thumbnail.fromResponse(data.accountPhoto);
        this.is_selected = data.isSelected;
        this.is_disabled = data.isDisabled;
        this.has_channel = data.hasChannel;
        this.endpoint = new NavigationEndpoint(data.serviceEndpoint);
        this.account_byline = new Text(data.accountByline);
    }
}
AccountItem.type = 'AccountItem';
class AccountItemSection extends YTNode {
    constructor(data) {
        super();
        this.contents = data.contents.map((ac) => new AccountItem(ac.accountItem));
        this.header = Parser.parseItem(data.header, AccountItemSectionHeader);
    }
}
AccountItemSection.type = 'AccountItemSection';
export default AccountItemSection;
//# sourceMappingURL=AccountItemSection.js.map