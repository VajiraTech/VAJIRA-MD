import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class VerticalWatchCardList extends YTNode {
    static type: string;
    items: import("../helpers.js").ObservedArray<YTNode>;
    contents: import("../helpers.js").ObservedArray<YTNode>;
    view_all_text: Text;
    view_all_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default VerticalWatchCardList;
