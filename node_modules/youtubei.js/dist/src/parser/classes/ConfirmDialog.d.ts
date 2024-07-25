import Text from './misc/Text.js';
import Button from './Button.js';
import { YTNode } from '../helpers.js';
declare class ConfirmDialog extends YTNode {
    static type: string;
    title: Text;
    confirm_button: Button | null;
    cancel_button: Button | null;
    dialog_messages: Text[];
    constructor(data: any);
}
export default ConfirmDialog;
