import BaseJSNode from './BaseJSNode.js';
export default class ReturnStatement extends BaseJSNode {
    run() {
        if (this.node.argument) {
            return this.visitor.visitNode(this.node.argument);
        }
    }
}
