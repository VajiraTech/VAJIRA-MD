import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class SettingsSwitch extends YTNode {
    static type: string;
    title: Text;
    subtitle: Text;
    enabled: boolean;
    enable_endpoint: NavigationEndpoint;
    disable_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SettingsSwitch;
