import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class SimpleTextSection extends YTNode {
    constructor(data) {
        super();
        this.lines = data.lines.map((line) => new Text(line));
        this.style = data.layoutStyle;
    }
}
SimpleTextSection.type = 'SimpleTextSection';
export default SimpleTextSection;
//# sourceMappingURL=SimpleTextSection.js.map