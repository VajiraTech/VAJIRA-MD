import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class CarouselHeader extends YTNode {
    constructor(data) {
        super();
        this.contents = Parser.parseArray(data.contents);
    }
}
CarouselHeader.type = 'CarouselHeader';
export default CarouselHeader;
//# sourceMappingURL=CarouselHeader.js.map