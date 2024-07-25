import BaseJSNode from './BaseJSNode.js';
export default class ConditionalExpression extends BaseJSNode {
    run() {
        const { test, consequent, alternate } = this.node;
        const check = this.visitor.visitNode(test);
        if (check) {
            return this.visitor.visitNode(consequent);
        }
        return this.visitor.visitNode(alternate);
    }
}
