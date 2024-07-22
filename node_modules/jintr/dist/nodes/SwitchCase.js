import BaseJSNode from './BaseJSNode.js';
export default class SwitchCase extends BaseJSNode {
    run() {
        for (const stmt of this.node.consequent) {
            const result = this.visitor.visitNode(stmt);
            if (stmt.type === 'ContinueStatement' || stmt.type === 'BreakStatement') {
                return result;
            }
        }
    }
}
