import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ChildVideo extends YTNode {
    static type: string;
    id: string;
    title: Text;
    duration: {
        text: string;
        seconds: number;
    };
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ChildVideo;
