import Feed from '../../core/Feed.js';
import type Actions from '../../core/Actions.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { ISearchResponse } from '../types/ParsedResponse.js';
import type { ApiResponse } from '../../core/Actions.js';
declare class Search extends Feed<ISearchResponse> {
    estimated_results: number;
    contents: ObservedArray<YTNode> | null;
    constructor(actions: Actions, data: ApiResponse | ISearchResponse);
}
export default Search;
