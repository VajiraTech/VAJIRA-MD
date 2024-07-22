import type { RawNode } from '../../index.js';
declare class ChildElement {
    static type: string;
    text: string | null;
    properties: any;
    child_elements?: ChildElement[];
    constructor(data: RawNode);
}
export default ChildElement;
