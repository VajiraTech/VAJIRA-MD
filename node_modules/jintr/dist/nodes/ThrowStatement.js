import BaseJSNode from './BaseJSNode.js';
export default class ThrowStatement extends BaseJSNode {
    run() {
        const arg = this.visitor.visitNode(this.node.argument);
        throw arg;
    }
}
