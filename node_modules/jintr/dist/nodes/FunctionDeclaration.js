import { namedFunction } from '../utils/index.js';
import BaseJSNode from './BaseJSNode.js';
export default class FunctionDeclaration extends BaseJSNode {
    run() {
        const { params, body } = this.node;
        const id = this.visitor.visitNode(this.node.id);
        // @TODO: Handle other types of params and pass them directly to next node instead of saving them in the global scope
        const fn = namedFunction(id, (args) => {
            let index = 0;
            for (const param of params) {
                this.visitor.visitNode(param);
                if (param.type === 'Identifier') {
                    this.visitor.scope.set(param.name, args[index]);
                }
                else {
                    console.warn('Unhandled param type', param.type);
                }
                index++;
            }
            return this.visitor.visitNode(body);
        });
        this.visitor.scope.set(id, fn);
    }
}
