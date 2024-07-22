import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
export default class ShowingResultsFor extends YTNode {
    static type: string;
    corrected_query: Text;
    original_query: Text;
    corrected_query_endpoint: NavigationEndpoint;
    original_query_endpoint: NavigationEndpoint;
    search_instead_for: Text;
    showing_results_for: Text;
    constructor(data: RawNode);
}
