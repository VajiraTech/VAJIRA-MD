import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class TimedMarkerDecoration extends YTNode {
    static type: string;
    visible_time_range_start_millis: number;
    visible_time_range_end_millis: number;
    decoration_time_millis: number;
    label: Text;
    icon: string;
    constructor(data: any);
}
export default TimedMarkerDecoration;
