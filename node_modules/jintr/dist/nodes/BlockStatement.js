import BaseJSNode from './BaseJSNode.js';
export default class BlockStatement extends BaseJSNode {
    run() {
        for (const stmt of this.node.body) {
            const result = this.visitor.visitNode(stmt);
            if (stmt.type === 'ReturnStatement')
                return result;
            if (result === 'break' || result === 'continue')
                return result;
            if ((stmt.type === 'WhileStatement' ||
                stmt.type === 'IfStatement' ||
                stmt.type === 'ForStatement' ||
                stmt.type === 'TryStatement') &&
                !!result) {
                return result;
            }
        }
    }
}
