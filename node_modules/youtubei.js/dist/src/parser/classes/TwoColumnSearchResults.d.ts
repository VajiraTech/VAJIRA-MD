import { YTNode } from '../helpers.js';
declare class TwoColumnSearchResults extends YTNode {
    static type: string;
    primary_contents: import("../helpers.js").SuperParsedResult<YTNode>;
    secondary_contents: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default TwoColumnSearchResults;
