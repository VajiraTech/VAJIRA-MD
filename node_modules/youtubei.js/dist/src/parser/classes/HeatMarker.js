import { YTNode } from '../helpers.js';
class HeatMarker extends YTNode {
    constructor(data) {
        super();
        this.time_range_start_millis = data.timeRangeStartMillis;
        this.marker_duration_millis = data.markerDurationMillis;
        this.heat_marker_intensity_score_normalized = data.heatMarkerIntensityScoreNormalized;
    }
}
HeatMarker.type = 'HeatMarker';
export default HeatMarker;
//# sourceMappingURL=HeatMarker.js.map