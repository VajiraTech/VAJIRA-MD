import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AnalyticsRoot extends YTNode {
    static type: string;
    title: string;
    selected_card_index_key: string;
    use_main_app_specs: boolean;
    table_cards: {
        title: string;
        rows: {
            label: string;
            display_value: string;
            display_value_a11y: string;
            bar_ratio: number;
            bar_color: number;
            bar_opacity: number;
        }[];
    }[];
    constructor(data: RawNode);
}
export default AnalyticsRoot;
