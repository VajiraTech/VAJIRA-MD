import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class CompactLink extends YTNode {
    static type: string;
    title: string;
    endpoint: NavigationEndpoint;
    style: string;
    constructor(data: any);
}
export default CompactLink;
