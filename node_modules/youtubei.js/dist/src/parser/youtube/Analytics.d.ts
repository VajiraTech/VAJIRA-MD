import type { ApiResponse } from '../../core/Actions.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class Analytics {
    #private;
    sections: import("../helpers.js").YTNode[] | undefined;
    constructor(response: ApiResponse);
    get page(): IBrowseResponse;
}
export default Analytics;
