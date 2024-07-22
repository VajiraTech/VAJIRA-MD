import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import MetadataBadge from './MetadataBadge.js';
declare class GridMovie extends YTNode {
    static type: string;
    id: string;
    title: Text;
    thumbnails: Thumbnail[];
    duration: Text | null;
    endpoint: NavigationEndpoint;
    badges: MetadataBadge[];
    metadata: Text;
    thumbnail_overlays: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
}
export default GridMovie;
