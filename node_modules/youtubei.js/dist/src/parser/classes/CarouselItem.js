import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
class CarouselItem extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parseArray(data.carouselItems);
        this.background_color = data.backgroundColor;
        this.layout_style = data.layoutStyle;
        this.pagination_thumbnails = Thumbnail.fromResponse(data.paginationThumbnails);
        this.paginator_alignment = data.paginatorAlignment;
    }
}
CarouselItem.type = 'CarouselItem';
export default CarouselItem;
//# sourceMappingURL=CarouselItem.js.map