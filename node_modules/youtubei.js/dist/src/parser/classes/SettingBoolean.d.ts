import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class SettingBoolean extends YTNode {
    static type: string;
    title?: Text;
    summary?: Text;
    enable_endpoint?: NavigationEndpoint;
    disable_endpoint?: NavigationEndpoint;
    item_id: string;
    constructor(data: any);
}
export default SettingBoolean;
