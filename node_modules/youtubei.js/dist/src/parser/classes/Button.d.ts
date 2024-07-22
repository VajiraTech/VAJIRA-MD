import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class Button extends YTNode {
    static type: string;
    text?: string;
    label?: string;
    tooltip?: string;
    icon_type?: string;
    is_disabled?: boolean;
    endpoint: NavigationEndpoint;
    constructor(data: RawNode);
}
