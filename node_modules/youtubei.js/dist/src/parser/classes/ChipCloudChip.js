import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ChipCloudChip extends YTNode {
    constructor(data) {
        super();
        // TODO: is this isSelected or just selected
        this.is_selected = data.isSelected;
        this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : undefined;
        this.text = new Text(data.text).toString();
    }
}
ChipCloudChip.type = 'ChipCloudChip';
export default ChipCloudChip;
//# sourceMappingURL=ChipCloudChip.js.map