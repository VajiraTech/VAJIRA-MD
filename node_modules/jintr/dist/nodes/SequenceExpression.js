import BaseJSNode from './BaseJSNode.js';
export default class SequenceExpression extends BaseJSNode {
    run() {
        let result;
        for (const expression of this.node.expressions) {
            result = this.visitor.visitNode(expression);
        }
        return result;
    }
}
