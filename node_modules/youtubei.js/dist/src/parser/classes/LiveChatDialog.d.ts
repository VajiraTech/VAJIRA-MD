import Text from './misc/Text.js';
import Button from './Button.js';
import { YTNode } from '../helpers.js';
declare class LiveChatDialog extends YTNode {
    static type: string;
    confirm_button: Button | null;
    dialog_messages: Text[];
    constructor(data: any);
}
export default LiveChatDialog;
