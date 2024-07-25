import NavigationEndpoint from '../NavigationEndpoint.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class MenuServiceItemDownload extends YTNode {
    static type: string;
    has_separator: boolean;
    endpoint: NavigationEndpoint;
    constructor(data: RawNode);
}
export default MenuServiceItemDownload;
