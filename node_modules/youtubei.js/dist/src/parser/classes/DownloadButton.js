import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class DownloadButton extends YTNode {
    constructor(data) {
        super();
        this.style = data.style;
        this.size = data.size;
        this.endpoint = new NavigationEndpoint(data.command);
        this.target_id = data.targetId;
    }
}
DownloadButton.type = 'DownloadButton';
export default DownloadButton;
//# sourceMappingURL=DownloadButton.js.map