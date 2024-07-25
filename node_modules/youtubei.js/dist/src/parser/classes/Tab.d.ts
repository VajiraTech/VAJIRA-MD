import NavigationEndpoint from './NavigationEndpoint.js';
import SectionList from './SectionList.js';
import MusicQueue from './MusicQueue.js';
import RichGrid from './RichGrid.js';
import { YTNode } from '../helpers.js';
declare class Tab extends YTNode {
    static type: string;
    title: string;
    selected: boolean;
    endpoint: NavigationEndpoint;
    content: MusicQueue | RichGrid | SectionList | null;
    constructor(data: any);
}
export default Tab;
