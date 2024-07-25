import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class SettingsCheckbox extends YTNode {
    static type: string;
    title: Text;
    help_text: Text;
    enabled: boolean;
    disabled: boolean;
    id: string;
    constructor(data: any);
}
export default SettingsCheckbox;
