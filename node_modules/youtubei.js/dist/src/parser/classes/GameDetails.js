import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class GameDetails extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.box_art = Thumbnail.fromResponse(data.boxArt);
        this.box_art_overlay_text = new Text(data.boxArtOverlayText);
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.is_official_box_art = data.isOfficialBoxArt;
    }
}
GameDetails.type = 'GameDetails';
export default GameDetails;
//# sourceMappingURL=GameDetails.js.map