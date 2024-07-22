import { YTNode } from '../../helpers.js';
class DataModelSection extends YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.metric_value = data.metricValue;
        this.comparison_indicator = data.comparisonIndicator;
        const line_series = data.seriesConfiguration.lineSeries;
        this.series_configuration = {
            line_series: {
                lines_data: {
                    x: line_series.linesData[0].x,
                    y: line_series.linesData[0].y,
                    style: {
                        line_width: line_series.linesData[0].style.lineWidth,
                        line_color: line_series.linesData[0].style.lineColor
                    }
                },
                domain_axis: {
                    tick_values: line_series.domainAxis.tickValues,
                    custom_formatter: line_series.domainAxis.customFormatter
                },
                measure_axis: {
                    tick_values: line_series.measureAxis.tickValues,
                    custom_formatter: line_series.measureAxis.customFormatter
                }
            }
        };
    }
}
DataModelSection.type = 'DataModelSection';
export default DataModelSection;
//# sourceMappingURL=DataModelSection.js.map