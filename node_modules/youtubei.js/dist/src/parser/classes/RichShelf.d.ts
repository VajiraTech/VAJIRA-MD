import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class RichShelf extends YTNode {
    static type: string;
    title: Text;
    contents: import("../helpers.js").ObservedArray<YTNode>;
    endpoint: NavigationEndpoint | null;
    constructor(data: any);
}
export default RichShelf;
