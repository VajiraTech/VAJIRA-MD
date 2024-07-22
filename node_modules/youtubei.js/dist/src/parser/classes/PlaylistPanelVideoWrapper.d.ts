import { YTNode } from '../helpers.js';
import PlaylistPanelVideo from './PlaylistPanelVideo.js';
declare class PlaylistPanelVideoWrapper extends YTNode {
    static type: string;
    primary: PlaylistPanelVideo | null;
    counterpart: Array<PlaylistPanelVideo | null>;
    constructor(data: any);
}
export default PlaylistPanelVideoWrapper;
