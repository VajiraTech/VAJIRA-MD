import BaseJSNode from './BaseJSNode.js';
export default class Literal extends BaseJSNode {
    run() {
        return this.node.value;
    }
}
