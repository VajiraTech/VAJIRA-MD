import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class DownloadButton extends YTNode {
    static type: string;
    style: string;
    size: string;
    endpoint: NavigationEndpoint;
    target_id: string;
    constructor(data: any);
}
export default DownloadButton;
