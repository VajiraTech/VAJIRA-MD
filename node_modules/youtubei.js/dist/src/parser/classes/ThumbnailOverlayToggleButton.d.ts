import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ThumbnailOverlayToggleButton extends YTNode {
    static type: string;
    is_toggled: boolean | null;
    icon_type: {
        toggled: string;
        untoggled: string;
    };
    tooltip: {
        toggled: string;
        untoggled: string;
    };
    toggled_endpoint: NavigationEndpoint;
    untoggled_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ThumbnailOverlayToggleButton;
