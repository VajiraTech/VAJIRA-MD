import BaseJSNode from './BaseJSNode.js';
export default class ObjectExpression extends BaseJSNode {
    run() {
        let result = {};
        for (const prop of this.node.properties) {
            if (prop.type === 'Property') {
                result = Object.assign(Object.assign({}, result), this.visitor.visitNode(prop));
            }
            else {
                throw new Error(`Unhandled property type: ${prop.type}`);
            }
        }
        return result;
    }
}
