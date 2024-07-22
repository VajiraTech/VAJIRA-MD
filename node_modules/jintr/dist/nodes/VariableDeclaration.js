import BaseJSNode from './BaseJSNode.js';
export default class VariableDeclaration extends BaseJSNode {
    run() {
        // TODO: Parse kind
        this.node.declarations.forEach((declar) => {
            const { id, init } = declar;
            const key = this.visitor.getName(id);
            const value = init
                ? this.visitor.visitNode(init)
                : undefined;
            if (key)
                this.visitor.scope.set(key, value);
            if (typeof value === 'object' && value !== null)
                this.visitor.scope.set('_this', value);
        });
    }
}
