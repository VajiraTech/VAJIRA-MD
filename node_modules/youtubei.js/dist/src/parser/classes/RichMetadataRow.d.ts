import { YTNode } from '../helpers.js';
declare class RichMetadataRow extends YTNode {
    static type: string;
    contents: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
}
export default RichMetadataRow;
