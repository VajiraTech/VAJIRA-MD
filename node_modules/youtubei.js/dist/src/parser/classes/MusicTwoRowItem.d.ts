import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay.js';
import Menu from './menus/Menu.js';
import { YTNode } from '../helpers.js';
declare class MusicTwoRowItem extends YTNode {
    static type: string;
    title: Text;
    endpoint: NavigationEndpoint;
    id: string | undefined;
    subtitle: Text;
    badges: import("../helpers.js").SuperParsedResult<YTNode>;
    item_type: string;
    subscribers?: string;
    item_count?: string | null;
    year?: string;
    views?: string;
    artists?: {
        name: string;
        channel_id: string | undefined;
        endpoint: NavigationEndpoint | undefined;
    }[];
    author?: {
        name: string;
        channel_id: string | undefined;
        endpoint: NavigationEndpoint | undefined;
    };
    thumbnail: Thumbnail[];
    thumbnail_overlay: MusicItemThumbnailOverlay | null;
    menu: Menu | null;
    constructor(data: any);
}
export default MusicTwoRowItem;
