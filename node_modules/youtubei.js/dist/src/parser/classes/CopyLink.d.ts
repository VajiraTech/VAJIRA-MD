import Button from './Button.js';
import { YTNode } from '../helpers.js';
declare class CopyLink extends YTNode {
    static type: string;
    copy_button: Button | null;
    short_url: string;
    style: string;
    constructor(data: any);
}
export default CopyLink;
