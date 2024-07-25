import BaseNode from './BaseJSNode.js';
export default class ArrayExpression extends BaseNode {
    run() {
        return this.node.elements.map((el) => this.visitor.visitNode(el));
    }
}
