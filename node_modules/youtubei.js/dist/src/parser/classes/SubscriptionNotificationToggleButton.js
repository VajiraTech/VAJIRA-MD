import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class SubscriptionNotificationToggleButton extends YTNode {
    constructor(data) {
        super();
        this.states = data.states.map((data) => ({
            id: data.stateId,
            next_id: data.nextStateId,
            state: Parser.parse(data.state)
        }));
        this.current_state_id = data.currentStateId;
        this.target_id = data.targetId;
    }
}
SubscriptionNotificationToggleButton.type = 'SubscriptionNotificationToggleButton';
export default SubscriptionNotificationToggleButton;
//# sourceMappingURL=SubscriptionNotificationToggleButton.js.map