import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class Alert extends YTNode {
    constructor(data) {
        super();
        this.text = new Text(data.text);
        this.alert_type = data.type;
    }
}
Alert.type = 'Alert';
export default Alert;
//# sourceMappingURL=Alert.js.map