import { YTNode } from '../helpers.js';
declare class TwoColumnBrowseResults extends YTNode {
    static type: string;
    tabs: import("../helpers.js").SuperParsedResult<YTNode>;
    secondary_contents: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default TwoColumnBrowseResults;
