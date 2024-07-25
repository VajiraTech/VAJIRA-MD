import Parser from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscriptionNotificationToggleButton from './SubscriptionNotificationToggleButton.js';
import { YTNode } from '../helpers.js';
class SubscribeButton extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text(data.buttonText);
        this.subscribed = data.subscribed;
        this.enabled = data.enabled;
        this.item_type = data.type;
        this.channel_id = data.channelId;
        this.show_preferences = data.showPreferences;
        this.subscribed_text = new Text(data.subscribedButtonText);
        this.unsubscribed_text = new Text(data.unsubscribedButtonText);
        this.notification_preference_button = Parser.parseItem(data.notificationPreferenceButton, SubscriptionNotificationToggleButton);
        this.endpoint = new NavigationEndpoint(((_a = data.serviceEndpoints) === null || _a === void 0 ? void 0 : _a[0]) || ((_b = data.onSubscribeEndpoints) === null || _b === void 0 ? void 0 : _b[0]));
    }
}
SubscribeButton.type = 'SubscribeButton';
export default SubscribeButton;
//# sourceMappingURL=SubscribeButton.js.map