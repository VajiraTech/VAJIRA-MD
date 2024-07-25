import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class SlimVideoMetadata extends YTNode {
    static type: string;
    title: Text;
    collapsed_subtitle: Text;
    expanded_subtitle: Text;
    owner: any;
    description: Text;
    video_id: string;
    date: Text;
    constructor(data: any);
}
export default SlimVideoMetadata;
