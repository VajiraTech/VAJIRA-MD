import { ObservedArray, YTNode } from '../helpers.js';
import Button from './Button.js';
import DropdownItem from './DropdownItem.js';
declare class CreatePlaylistDialog extends YTNode {
    static type: string;
    title: string;
    title_placeholder: string;
    privacy_option: ObservedArray<DropdownItem> | null;
    cancel_button: Button | null;
    create_button: Button | null;
    constructor(data: any);
}
export default CreatePlaylistDialog;
