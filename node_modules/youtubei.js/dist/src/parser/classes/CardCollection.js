import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class CardCollection extends YTNode {
    constructor(data) {
        super();
        this.cards = Parser.parseArray(data.cards);
        this.header = new Text(data.headerText);
        this.allow_teaser_dismiss = data.allowTeaserDismiss;
    }
}
CardCollection.type = 'CardCollection';
export default CardCollection;
//# sourceMappingURL=CardCollection.js.map