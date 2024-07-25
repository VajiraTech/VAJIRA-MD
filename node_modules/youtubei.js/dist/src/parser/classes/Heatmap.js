import Parser from '../index.js';
import HeatMarker from './HeatMarker.js';
import { YTNode } from '../helpers.js';
class Heatmap extends YTNode {
    constructor(data) {
        super();
        this.max_height_dp = data.maxHeightDp;
        this.min_height_dp = data.minHeightDp;
        this.show_hide_animation_duration_millis = data.showHideAnimationDurationMillis;
        this.heat_markers = Parser.parseArray(data.heatMarkers, HeatMarker);
        this.heat_markers_decorations = Parser.parseArray(data.heatMarkersDecorations);
    }
}
Heatmap.type = 'Heatmap';
export default Heatmap;
//# sourceMappingURL=Heatmap.js.map