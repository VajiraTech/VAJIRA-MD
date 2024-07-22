import Parser from '../index.js';
import Button from './Button.js';
import { YTNode } from '../helpers.js';
class CopyLink extends YTNode {
    constructor(data) {
        super();
        this.copy_button = Parser.parseItem(data.copyButton, Button);
        this.short_url = data.shortUrl;
        this.style = data.style;
    }
}
CopyLink.type = 'CopyLink';
export default CopyLink;
//# sourceMappingURL=CopyLink.js.map