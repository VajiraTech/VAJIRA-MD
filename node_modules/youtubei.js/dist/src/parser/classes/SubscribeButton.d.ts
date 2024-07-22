import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscriptionNotificationToggleButton from './SubscriptionNotificationToggleButton.js';
import { YTNode } from '../helpers.js';
declare class SubscribeButton extends YTNode {
    static type: string;
    title: Text;
    subscribed: boolean;
    enabled: boolean;
    item_type: string;
    channel_id: string;
    show_preferences: boolean;
    subscribed_text: Text;
    unsubscribed_text: Text;
    notification_preference_button: SubscriptionNotificationToggleButton | null;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SubscribeButton;
