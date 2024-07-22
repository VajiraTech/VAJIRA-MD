import EndScreenVideo from './EndScreenVideo.js';
import EndScreenPlaylist from './EndScreenPlaylist.js';
import { YTNode } from '../helpers.js';
declare class WatchNextEndScreen extends YTNode {
    static type: string;
    results: import("../helpers.js").ObservedArray<EndScreenPlaylist | EndScreenVideo>;
    title: string;
    constructor(data: any);
}
export default WatchNextEndScreen;
