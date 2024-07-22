import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class DidYouMean extends YTNode {
    constructor(data) {
        super();
        this.text = new Text(data.didYouMean).toString();
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.correctedQueryEndpoint);
    }
}
DidYouMean.type = 'DidYouMean';
export default DidYouMean;
//# sourceMappingURL=DidYouMean.js.map