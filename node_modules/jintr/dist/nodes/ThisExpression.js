import BaseJSNode from './BaseJSNode.js';
export default class ThisExpression extends BaseJSNode {
    run() {
        return this.visitor.scope.get('_this');
    }
}
