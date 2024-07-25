import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class WatchCardCompactVideo extends YTNode {
    static type: string;
    title: Text;
    subtitle: Text;
    duration: {
        text: string;
        seconds: number;
    };
    style: string;
    constructor(data: any);
}
export default WatchCardCompactVideo;
