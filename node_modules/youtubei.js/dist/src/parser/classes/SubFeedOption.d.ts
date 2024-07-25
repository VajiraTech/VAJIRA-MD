import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class SubFeedOption extends YTNode {
    static type: string;
    name: Text;
    is_selected: boolean;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SubFeedOption;
