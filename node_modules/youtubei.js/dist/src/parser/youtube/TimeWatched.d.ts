import ItemSection from '../classes/ItemSection.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray } from '../helpers.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class TimeWatched {
    #private;
    contents?: ObservedArray<ItemSection>;
    constructor(response: ApiResponse);
    get page(): IBrowseResponse;
}
export default TimeWatched;
