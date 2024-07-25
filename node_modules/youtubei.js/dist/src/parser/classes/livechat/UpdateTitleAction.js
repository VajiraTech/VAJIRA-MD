import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class UpdateTitleAction extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
UpdateTitleAction.type = 'UpdateTitleAction';
export default UpdateTitleAction;
//# sourceMappingURL=UpdateTitleAction.js.map