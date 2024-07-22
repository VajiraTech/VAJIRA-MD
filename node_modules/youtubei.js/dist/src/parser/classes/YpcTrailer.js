import { YTNode } from '../helpers.js';
class YpcTrailer extends YTNode {
    constructor(data) {
        super();
        this.video_message = data.fullVideoMessage;
        this.player_response = data.unserializedPlayerResponse;
    }
}
YpcTrailer.type = 'YpcTrailer';
export default YpcTrailer;
//# sourceMappingURL=YpcTrailer.js.map