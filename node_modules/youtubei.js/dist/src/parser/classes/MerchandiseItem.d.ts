import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class MerchandiseItem extends YTNode {
    static type: string;
    title: string;
    description: string;
    thumbnails: Thumbnail[];
    price: string;
    vendor_name: string;
    button_text: string;
    button_accessibility_text: string;
    from_vendor_text: string;
    additional_fees_text: string;
    region_format: string;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default MerchandiseItem;
