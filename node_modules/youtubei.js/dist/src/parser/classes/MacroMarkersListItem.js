import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class MacroMarkersListItem extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.time_description = new Text(data.timeDescription);
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.on_tap_endpoint = new NavigationEndpoint(data.onTap);
        this.layout = data.layout;
        this.is_highlighted = data.isHighlighted;
    }
}
MacroMarkersListItem.type = 'MacroMarkersListItem';
export default MacroMarkersListItem;
//# sourceMappingURL=MacroMarkersListItem.js.map