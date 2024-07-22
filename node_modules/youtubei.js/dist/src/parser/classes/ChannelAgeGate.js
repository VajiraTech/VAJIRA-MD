import { Parser } from '../index.js';
import Button from './Button.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class ChannelAgeGate extends YTNode {
    constructor(data) {
        super();
        this.channel_title = data.channelTitle;
        this.avatar = Thumbnail.fromResponse(data.avatar);
        this.header = new Text(data.header);
        this.main_text = new Text(data.mainText);
        this.sign_in_button = Parser.parseItem(data.signInButton, Button);
        this.secondary_text = new Text(data.secondaryText);
    }
}
ChannelAgeGate.type = 'ChannelAgeGate';
export default ChannelAgeGate;
//# sourceMappingURL=ChannelAgeGate.js.map