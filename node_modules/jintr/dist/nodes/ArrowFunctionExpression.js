import { namedFunction } from '../utils/index.js';
import BaseJSNode from './BaseJSNode.js';
export default class ArrowFunctionExpression extends BaseJSNode {
    run() {
        const { params, body } = this.node;
        // @TODO: Handle other types of params and pass them directly to next node instead of saving them in the global scope
        const fn = namedFunction('anonymous function', (args) => {
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
        return fn;
    }
}
