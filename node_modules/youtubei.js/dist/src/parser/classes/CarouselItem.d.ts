import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
declare class CarouselItem extends YTNode {
    static type: string;
    items: YTNode[];
    background_color: string;
    layout_style: string;
    pagination_thumbnails: Thumbnail[];
    paginator_alignment: string;
    constructor(data: any);
}
export default CarouselItem;
