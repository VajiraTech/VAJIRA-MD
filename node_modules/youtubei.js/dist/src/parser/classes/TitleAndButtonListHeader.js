import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class TitleAndButtonListHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
TitleAndButtonListHeader.type = 'TitleAndButtonListHeader';
export default TitleAndButtonListHeader;
//# sourceMappingURL=TitleAndButtonListHeader.js.map