import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class GridHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
    }
}
GridHeader.type = 'GridHeader';
export default GridHeader;
//# sourceMappingURL=GridHeader.js.map