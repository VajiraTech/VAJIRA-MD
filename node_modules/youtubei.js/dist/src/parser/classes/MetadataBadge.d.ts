import { YTNode } from '../helpers.js';
declare class MetadataBadge extends YTNode {
    static type: string;
    icon_type?: string;
    style?: string;
    label?: string;
    tooltip?: string;
    constructor(data: any);
}
export default MetadataBadge;
