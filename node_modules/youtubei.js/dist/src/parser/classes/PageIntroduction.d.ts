import { YTNode } from '../helpers.js';
declare class PageIntroduction extends YTNode {
    static type: string;
    header_text: string;
    body_text: string;
    page_title: string;
    header_icon_type: string;
    constructor(data: any);
}
export default PageIntroduction;
