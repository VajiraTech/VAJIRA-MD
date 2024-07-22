import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class SearchRefinementCard extends YTNode {
    constructor(data) {
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.searchEndpoint);
        this.query = new Text(data.query).toString();
    }
}
SearchRefinementCard.type = 'SearchRefinementCard';
export default SearchRefinementCard;
//# sourceMappingURL=SearchRefinementCard.js.map