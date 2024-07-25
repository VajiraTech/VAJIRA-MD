import Parser from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import { YTNode } from '../helpers.js';
class ConfirmDialog extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.confirm_button = Parser.parseItem(data.confirmButton, Button);
        this.cancel_button = Parser.parseItem(data.cancelButton, Button);
        this.dialog_messages = data.dialogMessages.map((txt) => new Text(txt));
    }
}
ConfirmDialog.type = 'ConfirmDialog';
export default ConfirmDialog;
//# sourceMappingURL=ConfirmDialog.js.map