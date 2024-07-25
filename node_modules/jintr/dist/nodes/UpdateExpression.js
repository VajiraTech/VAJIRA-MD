import BaseJSNode from './BaseJSNode.js';
export default class UpdateExpression extends BaseJSNode {
    run() {
        const operator = this.node.operator;
        switch (operator) {
            case '++':
                {
                    if (this.node.argument.type === 'MemberExpression') {
                        const target_node = this.visitor.visitNode(this.node.argument.object);
                        return target_node[this.visitor.visitNode(this.node.argument.property)]++;
                    }
                    else if (this.node.argument.type === 'Identifier') {
                        let target_node = this.visitor.visitNode(this.node.argument);
                        this.visitor.scope.set(this.node.argument.name, target_node + 1);
                        return this.node.prefix ? ++target_node : target_node;
                    }
                }
                break;
            case '--':
                {
                    if (this.node.argument.type === 'MemberExpression') {
                        const target_node = this.visitor.visitNode(this.node.argument.object);
                        return target_node[this.visitor.visitNode(this.node.argument.property)]--;
                    }
                    else if (this.node.argument.type === 'Identifier') {
                        let target_node = this.visitor.visitNode(this.node.argument);
                        this.visitor.scope.set(this.node.argument.name, target_node - 1);
                        return this.node.prefix ? --target_node : target_node;
                    }
                }
                break;
        }
    }
}
