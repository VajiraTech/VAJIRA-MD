import { YTNode } from '../helpers.js';
declare class Tabbed extends YTNode {
    static type: string;
    contents: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default Tabbed;
