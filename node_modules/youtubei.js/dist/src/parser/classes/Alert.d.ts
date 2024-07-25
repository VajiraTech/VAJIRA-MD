import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
declare class Alert extends YTNode {
    static type: string;
    text: Text;
    alert_type: string;
    constructor(data: RawNode);
}
export default Alert;
