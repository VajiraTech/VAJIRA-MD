import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class DataModelSection extends YTNode {
    static type: string;
    title: string;
    subtitle: string;
    metric_value: string;
    comparison_indicator: {
        trend: string;
    };
    series_configuration: {
        line_series: {
            lines_data: {
                x: number[];
                y: number[];
                style: {
                    line_width: number;
                    line_color: number;
                };
            };
            domain_axis: {
                tick_values: number[];
                custom_formatter: {
                    labels: string[];
                };
            };
            measure_axis: {
                tick_values: number[];
                custom_formatter: {
                    labels: string[];
                };
            };
        };
    };
    constructor(data: RawNode);
}
export default DataModelSection;
