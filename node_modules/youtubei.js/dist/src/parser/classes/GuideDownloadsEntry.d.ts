import GuideEntry from './GuideEntry.js';
import type { RawNode } from '../index.js';
export default class GuideDownloadsEntry extends GuideEntry {
    static type: string;
    always_show: boolean;
    constructor(data: RawNode);
}
