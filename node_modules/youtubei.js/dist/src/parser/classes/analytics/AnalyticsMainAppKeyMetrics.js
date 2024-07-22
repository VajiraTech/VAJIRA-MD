import DataModelSection from './DataModelSection.js';
import { YTNode } from '../../helpers.js';
class AnalyticsMainAppKeyMetrics extends YTNode {
    constructor(data) {
        super();
        this.period = data.cardData.periodLabel;
        const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
        this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection(section));
    }
}
AnalyticsMainAppKeyMetrics.type = 'AnalyticsMainAppKeyMetrics';
export default AnalyticsMainAppKeyMetrics;
//# sourceMappingURL=AnalyticsMainAppKeyMetrics.js.map