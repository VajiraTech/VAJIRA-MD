import { YTNode } from '../helpers.js';
declare class SubscriptionNotificationToggleButton extends YTNode {
    static type: string;
    states: {
        id: string;
        next_id: string;
        state: any;
    };
    current_state_id: string;
    target_id: string;
    constructor(data: any);
}
export default SubscriptionNotificationToggleButton;
