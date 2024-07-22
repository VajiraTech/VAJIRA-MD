import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
declare class GameDetails extends YTNode {
    static type: string;
    title: Text;
    box_art: Thumbnail[];
    box_art_overlay_text: Text;
    endpoint: NavigationEndpoint;
    is_official_box_art: boolean;
    constructor(data: any);
}
export default GameDetails;
