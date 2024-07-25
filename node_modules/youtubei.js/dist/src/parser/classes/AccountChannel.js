import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class AccountChannel extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
AccountChannel.type = 'AccountChannel';
export default AccountChannel;
//# sourceMappingURL=AccountChannel.js.map