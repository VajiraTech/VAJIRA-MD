import { YTNode } from '../helpers.js';
import Tab from './Tab.js';
declare class TabbedSearchResults extends YTNode {
    static type: string;
    tabs: import("../helpers.js").ObservedArray<Tab>;
    constructor(data: any);
}
export default TabbedSearchResults;
