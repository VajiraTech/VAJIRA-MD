import BaseJSNode from './BaseJSNode.js';
export default class ExpressionStatement extends BaseJSNode {
    run() {
        return this.visitor.visitNode(this.node.expression);
    }
}
