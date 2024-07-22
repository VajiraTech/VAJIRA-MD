import PlaylistPanel from './PlaylistPanel.js';
import { YTNode } from '../helpers.js';
declare class MusicQueue extends YTNode {
    static type: string;
    content: PlaylistPanel | null;
    constructor(data: any);
}
export default MusicQueue;
