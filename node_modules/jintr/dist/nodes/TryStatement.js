import BaseJSNode from './BaseJSNode.js';
export default class TryStatement extends BaseJSNode {
    run() {
        try {
            return this.visitor.visitNode(this.node.block);
        }
        catch (e) {
            if (this.node.handler) {
                if (this.node.handler.param && this.node.handler.param.type === 'Identifier') {
                    this.visitor.scope.set(this.node.handler.param.name, e);
                }
                return this.visitor.visitNode(this.node.handler.body);
            }
        }
        finally {
            this.visitor.visitNode(this.node.finalizer);
        }
    }
}
