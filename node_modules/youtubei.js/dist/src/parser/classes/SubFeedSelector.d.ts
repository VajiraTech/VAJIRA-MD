import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class SubFeedSelector extends YTNode {
    static type: string;
    title: Text;
    options: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default SubFeedSelector;
