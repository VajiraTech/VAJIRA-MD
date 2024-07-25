import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Button from './Button.js';
class HorizontalMovieList extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parseArray(data.items);
        this.previous_button = Parser.parseItem(data.previousButton, Button);
        this.next_button = Parser.parseItem(data.nextButton, Button);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
HorizontalMovieList.type = 'HorizontalMovieList';
export default HorizontalMovieList;
//# sourceMappingURL=HorizontalMovieList.js.map