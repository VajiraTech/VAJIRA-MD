import DataModelSection from './DataModelSection.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AnalyticsMainAppKeyMetrics extends YTNode {
    static type: string;
    period: string;
    sections: DataModelSection[];
    constructor(data: RawNode);
}
export default AnalyticsMainAppKeyMetrics;
