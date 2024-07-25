import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class TimedMarkerDecoration extends YTNode {
    constructor(data) {
        super();
        this.visible_time_range_start_millis = data.visibleTimeRangeStartMillis;
        this.visible_time_range_end_millis = data.visibleTimeRangeEndMillis;
        this.decoration_time_millis = data.decorationTimeMillis;
        this.label = new Text(data.label);
        this.icon = data.icon;
    }
}
TimedMarkerDecoration.type = 'TimedMarkerDecoration';
export default TimedMarkerDecoration;
//# sourceMappingURL=TimedMarkerDecoration.js.map