import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
declare class AudioOnlyPlayability extends YTNode {
    static type: string;
    audio_only_availability: string;
    constructor(data: RawNode);
}
export default AudioOnlyPlayability;
