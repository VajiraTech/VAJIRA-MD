import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class BackstageImage extends YTNode {
    static type: string;
    image: Thumbnail[];
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default BackstageImage;
