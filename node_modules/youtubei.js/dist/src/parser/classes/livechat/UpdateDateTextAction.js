import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class UpdateDateTextAction extends YTNode {
    constructor(data) {
        super();
        this.date_text = new Text(data.dateText).toString();
    }
}
UpdateDateTextAction.type = 'UpdateDateTextAction';
export default UpdateDateTextAction;
//# sourceMappingURL=UpdateDateTextAction.js.map