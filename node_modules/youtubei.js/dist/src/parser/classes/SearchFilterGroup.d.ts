import { ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import SearchFilter from './SearchFilter.js';
declare class SearchFilterGroup extends YTNode {
    static type: string;
    title: Text;
    filters: ObservedArray<SearchFilter> | null;
    constructor(data: RawNode);
}
export default SearchFilterGroup;
