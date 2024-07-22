import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ThumbnailOverlayToggleButton extends YTNode {
    constructor(data) {
        super();
        this.is_toggled = data.isToggled || null;
        this.icon_type = {
            toggled: data.toggledIcon.iconType,
            untoggled: data.untoggledIcon.iconType
        };
        this.tooltip = {
            toggled: data.toggledTooltip,
            untoggled: data.untoggledTooltip
        };
        this.toggled_endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
        this.untoggled_endpoint = new NavigationEndpoint(data.untoggledServiceEndpoint);
    }
}
ThumbnailOverlayToggleButton.type = 'ThumbnailOverlayToggleButton';
export default ThumbnailOverlayToggleButton;
//# sourceMappingURL=ThumbnailOverlayToggleButton.js.map