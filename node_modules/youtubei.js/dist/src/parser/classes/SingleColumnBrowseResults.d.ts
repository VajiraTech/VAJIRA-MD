import Tab from './Tab.js';
import { YTNode } from '../helpers.js';
declare class SingleColumnBrowseResults extends YTNode {
    static type: string;
    tabs: import("../helpers.js").ObservedArray<Tab>;
    constructor(data: any);
}
export default SingleColumnBrowseResults;
