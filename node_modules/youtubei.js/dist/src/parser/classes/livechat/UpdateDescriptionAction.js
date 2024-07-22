import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class UpdateDescriptionAction extends YTNode {
    constructor(data) {
        super();
        this.description = new Text(data.description);
    }
}
UpdateDescriptionAction.type = 'UpdateDescriptionAction';
export default UpdateDescriptionAction;
//# sourceMappingURL=UpdateDescriptionAction.js.map