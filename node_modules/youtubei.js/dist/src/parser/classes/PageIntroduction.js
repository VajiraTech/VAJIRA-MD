import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class PageIntroduction extends YTNode {
    constructor(data) {
        super();
        this.header_text = new Text(data.headerText).toString();
        this.body_text = new Text(data.bodyText).toString();
        this.page_title = new Text(data.pageTitle).toString();
        this.header_icon_type = data.headerIcon.iconType;
    }
}
PageIntroduction.type = 'PageIntroduction';
export default PageIntroduction;
//# sourceMappingURL=PageIntroduction.js.map