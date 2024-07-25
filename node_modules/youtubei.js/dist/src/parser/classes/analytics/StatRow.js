import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class StatRow extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.contents = new Text(data.contents);
    }
}
StatRow.type = 'StatRow';
export default StatRow;
//# sourceMappingURL=StatRow.js.map