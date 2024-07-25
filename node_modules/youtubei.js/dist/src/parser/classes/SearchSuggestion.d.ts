import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class SearchSuggestion extends YTNode {
    static type: string;
    suggestion: Text;
    endpoint: NavigationEndpoint;
    icon_type: string;
    service_endpoint: NavigationEndpoint | undefined;
    constructor(data: any);
}
export default SearchSuggestion;
