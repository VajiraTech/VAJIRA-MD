import { YTNode } from '../../helpers.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import type { RawNode } from '../../index.js';
declare class MusicMultiSelectMenuItem extends YTNode {
    static type: string;
    title: string;
    form_item_entity_key: string;
    selected_icon_type: string;
    endpoint?: NavigationEndpoint | null;
    selected: boolean;
    constructor(data: RawNode);
}
export default MusicMultiSelectMenuItem;
