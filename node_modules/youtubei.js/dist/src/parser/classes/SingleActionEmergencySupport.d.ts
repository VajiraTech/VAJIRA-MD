import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class SingleActionEmergencySupport extends YTNode {
    static type: string;
    action_text: Text;
    nav_text: Text;
    details: Text;
    icon_type: string;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SingleActionEmergencySupport;
