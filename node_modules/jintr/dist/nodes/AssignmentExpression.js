import BaseJSNode from './BaseJSNode.js';
export default class AssignmentExpression extends BaseJSNode {
    run() {
        const operator = this.node.operator;
        const right_node = this.visitor.visitNode(this.node.right);
        switch (operator) {
            case '=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] = right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    this.visitor.scope.set(this.node.left.name, right_node);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '+=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] += right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) + right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '-=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] -= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) - right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '*=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] *= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) * right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '/=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] /= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) / right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '%=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] %= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) % right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '**=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] **= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) ** right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '<<=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] <<= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) << right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '>>=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] >>= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) >> right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '>>>=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] >>>= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) >>> right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
            case '&=':
                if (this.node.left.type === 'MemberExpression') {
                    const obj = this.visitor.visitNode(this.node.left.object);
                    const prop = this.visitor.visitNode(this.node.left.property);
                    return obj[prop] &= right_node;
                }
                else if (this.node.left.type === 'Identifier') {
                    const result = this.visitor.visitNode(this.node.left) & right_node;
                    this.visitor.scope.set(this.node.left.name, result);
                    return this.visitor.scope.get(this.node.left.name);
                }
                console.warn('Unhandled left node', this.node.left);
                break;
        }
    }
}
