import BaseJSNode from './BaseJSNode.js';
export default class SwitchStatement extends BaseJSNode {
    run() {
        const discriminant = this.visitor.visitNode(this.node.discriminant);
        let matched = false;
        let default_case = -1;
        let index = 0;
        while (true) {
            const _case = this.node.cases[index];
            if (matched) {
                const result = this.visitor.visitNode(_case);
                // If it's a break then stop here.
                if (result === 'break') {
                    break;
                }
                // Switch statements do not support continue, but it can be used when inside a while/for loop.
                if (result === 'continue') {
                    return result;
                }
                ++index;
                if (index >= this.node.cases.length) {
                    index = 0;
                    break;
                }
                else {
                    continue;
                }
            }
            matched = _case && (discriminant === this.visitor.visitNode(_case.test));
            // Ran through all cases and checked everything, break the loop.
            if (matched === undefined && index > this.node.cases.length)
                break;
            // Save the default case so we can get back to it later.
            if (_case && !matched && !_case.test) {
                default_case = index;
                index += 1;
                continue;
            }
            // Ran through all cases but no match — run default case.
            if (!_case && !matched && default_case !== -1) {
                matched = true;
                index = default_case;
                continue;
            }
            if (!matched) {
                ++index;
            }
        }
    }
}
