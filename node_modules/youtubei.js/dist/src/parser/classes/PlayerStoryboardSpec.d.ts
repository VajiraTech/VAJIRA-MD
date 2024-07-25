import { YTNode } from '../helpers.js';
declare class PlayerStoryboardSpec extends YTNode {
    static type: string;
    boards: {
        template_url: string;
        thumbnail_width: number;
        thumbnail_height: number;
        thumbnail_count: number;
        interval: number;
        columns: number;
        rows: number;
        storyboard_count: number;
    };
    constructor(data: any);
}
export default PlayerStoryboardSpec;
