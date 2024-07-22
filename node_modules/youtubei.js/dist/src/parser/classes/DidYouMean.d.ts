import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class DidYouMean extends YTNode {
    static type: string;
    text: string;
    corrected_query: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default DidYouMean;
