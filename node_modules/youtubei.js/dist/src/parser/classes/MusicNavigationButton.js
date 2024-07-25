import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class MusicNavigationButton extends YTNode {
    constructor(data) {
        super();
        this.button_text = new Text(data.buttonText).toString();
        this.endpoint = new NavigationEndpoint(data.clickCommand);
    }
}
MusicNavigationButton.type = 'MusicNavigationButton';
export default MusicNavigationButton;
//# sourceMappingURL=MusicNavigationButton.js.map