import { YTNode } from '../helpers.js';
declare class PlaylistMetadata extends YTNode {
    static type: string;
    title: string;
    description: string;
    constructor(data: any);
}
export default PlaylistMetadata;
