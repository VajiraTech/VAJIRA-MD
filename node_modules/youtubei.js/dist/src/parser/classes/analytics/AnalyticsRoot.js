import { YTNode } from '../../helpers.js';
class AnalyticsRoot extends YTNode {
    constructor(data) {
        super();
        const cards = data.analyticsTableCarouselData.data.tableCards;
        this.title = data.analyticsTableCarouselData.carouselTitle;
        this.selected_card_index_key = data.analyticsTableCarouselData.selectedCardIndexKey;
        this.table_cards = cards.map((card) => ({
            title: card.cardData.title,
            rows: card.cardData.rows.map((row) => ({
                label: row.label,
                display_value: row.displayValue,
                display_value_a11y: row.displayValueA11y,
                bar_ratio: row.barRatio,
                bar_color: row.barColor,
                bar_opacity: row.barOpacity
            }))
        }));
        this.use_main_app_specs = data.analyticsTableCarouselData.useMainAppSpecs;
    }
}
AnalyticsRoot.type = 'AnalyticsRoot';
export default AnalyticsRoot;
//# sourceMappingURL=AnalyticsRoot.js.map