import BaseJSNode from './BaseJSNode.js';
export default class BreakStatement extends BaseJSNode {
    run() {
        // @TODO: Parse label
        return 'break';
    }
}
