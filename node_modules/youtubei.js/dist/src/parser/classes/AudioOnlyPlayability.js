import { YTNode } from '../helpers.js';
class AudioOnlyPlayability extends YTNode {
    constructor(data) {
        super();
        this.audio_only_availability = data.audioOnlyAvailability;
    }
}
AudioOnlyPlayability.type = 'AudioOnlyPlayability';
export default AudioOnlyPlayability;
//# sourceMappingURL=AudioOnlyPlayability.js.map