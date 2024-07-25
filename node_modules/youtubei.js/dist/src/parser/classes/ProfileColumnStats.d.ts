import { YTNode } from '../helpers.js';
declare class ProfileColumnStats extends YTNode {
    static type: string;
    items: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers.js").ObservedArray<YTNode>;
}
export default ProfileColumnStats;
