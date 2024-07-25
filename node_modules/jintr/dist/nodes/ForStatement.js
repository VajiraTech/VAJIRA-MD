import BaseJSNode from './BaseJSNode.js';
export default class ForStatement extends BaseJSNode {
    run() {
        if (this.node.init) {
            this.visitor.visitNode(this.node.init);
        }
        const test = () => {
            return this.node.test
                ? this.visitor.visitNode(this.node.test)
                : true;
        };
        for (;;) {
            const _test = test();
            if (!_test) {
                break;
            }
            const body = this.visitor.visitNode(this.node.body);
            if (body === 'continue') {
                continue;
            }
            if (body === 'break') {
                break;
            }
            if (this.node.update) {
                this.visitor.visitNode(this.node.update);
            }
            if (body && this.node.body.type !== 'ExpressionStatement') {
                return body;
            }
        }
    }
}
