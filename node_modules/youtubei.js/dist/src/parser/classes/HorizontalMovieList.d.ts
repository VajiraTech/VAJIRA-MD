import { YTNode } from '../helpers.js';
import Button from './Button.js';
declare class HorizontalMovieList extends YTNode {
    static type: string;
    items: import("../helpers.js").ObservedArray<YTNode>;
    previous_button: Button | null;
    next_button: Button | null;
    constructor(data: any);
    get contents(): import("../helpers.js").ObservedArray<YTNode>;
}
export default HorizontalMovieList;
