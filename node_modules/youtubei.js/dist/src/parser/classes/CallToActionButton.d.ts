import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class CallToActionButton extends YTNode {
    static type: string;
    label: Text;
    icon_type: string;
    style: string;
    constructor(data: any);
}
export default CallToActionButton;
