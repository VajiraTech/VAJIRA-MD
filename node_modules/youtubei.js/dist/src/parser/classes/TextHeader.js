import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class TextHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.style = data.style;
    }
}
TextHeader.type = 'TextHeader';
export default TextHeader;
//# sourceMappingURL=TextHeader.js.map