import BaseJSNode from './BaseJSNode.js';
export default class BinaryExpression extends BaseJSNode {
    run() {
        const operator = this.node.operator;
        const left_node = this.visitor.visitNode(this.node.left);
        const right_node = this.visitor.visitNode(this.node.right);
        switch (operator) {
            case '!=':
                return left_node != right_node;
            case '!==':
                return left_node !== right_node;
            case '%':
                return left_node % right_node;
            case '&':
                return left_node & right_node;
            case '*':
                return left_node * right_node;
            case '**':
                return left_node ** right_node;
            case '+':
                return left_node + right_node;
            case '-':
                return left_node - right_node;
            case '/':
                return left_node / right_node;
            case '<':
                return left_node < right_node;
            case '<<':
                return left_node << right_node;
            case '<=':
                return left_node <= right_node;
            case '==':
                return left_node == right_node;
            case '===':
                return left_node === right_node;
            case '>':
                return left_node > right_node;
            case '>=':
                return left_node >= right_node;
            case '>>':
                return left_node >> right_node;
            case '>>>':
                return left_node >>> right_node;
            case '^':
                return left_node ^ right_node;
            case '|':
                return left_node | right_node;
            case 'in':
                return left_node in right_node;
            case 'instanceof':
                return left_node instanceof right_node;
        }
    }
}
