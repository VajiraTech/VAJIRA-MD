import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
declare class SearchFilter extends YTNode {
    static type: string;
    label: Text;
    endpoint: NavigationEndpoint;
    tooltip: string;
    status?: string;
    constructor(data: RawNode);
    get disabled(): boolean;
    get selected(): boolean;
}
export default SearchFilter;
