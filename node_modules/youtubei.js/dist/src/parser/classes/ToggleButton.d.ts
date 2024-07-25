import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ToggleButton extends YTNode {
    static type: string;
    text: Text;
    toggled_text: Text;
    tooltip: string;
    toggled_tooltip: string;
    is_toggled: boolean;
    is_disabled: boolean;
    icon_type: string;
    like_count: number | undefined;
    short_like_count: string | undefined;
    endpoint: NavigationEndpoint;
    toggled_endpoint: NavigationEndpoint;
    button_id: string | null;
    target_id: string | null;
    constructor(data: any);
}
export default ToggleButton;
