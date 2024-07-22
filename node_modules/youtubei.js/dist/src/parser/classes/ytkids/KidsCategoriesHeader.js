import Parser from '../../index.js';
import Button from '../Button.js';
import KidsCategoryTab from './KidsCategoryTab.js';
import { YTNode } from '../../helpers.js';
class KidsCategoriesHeader extends YTNode {
    constructor(data) {
        super();
        this.category_tabs = Parser.parseArray(data.categoryTabs, KidsCategoryTab);
        this.privacy_button = Parser.parseItem(data.privacyButtonRenderer, Button);
    }
}
KidsCategoriesHeader.type = 'kidsCategoriesHeader';
export default KidsCategoriesHeader;
//# sourceMappingURL=KidsCategoriesHeader.js.map