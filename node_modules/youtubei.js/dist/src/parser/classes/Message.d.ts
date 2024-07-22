import { YTNode } from '../helpers.js';
declare class Message extends YTNode {
    static type: string;
    text: string;
    constructor(data: any);
}
export default Message;
