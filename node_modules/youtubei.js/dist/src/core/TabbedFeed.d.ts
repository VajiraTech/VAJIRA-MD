import Feed from './Feed.js';
import type Actions from './Actions.js';
import type { IParsedResponse } from '../parser/types/ParsedResponse.js';
import type { ApiResponse } from './Actions.js';
declare class TabbedFeed<T extends IParsedResponse> extends Feed<T> {
    #private;
    constructor(actions: Actions, data: ApiResponse | IParsedResponse, already_parsed?: boolean);
    get tabs(): string[];
    getTabByName(title: string): Promise<TabbedFeed<T>>;
    getTabByURL(url: string): Promise<TabbedFeed<T>>;
    hasTabWithURL(url: string): boolean;
    get title(): string | undefined;
}
export default TabbedFeed;
