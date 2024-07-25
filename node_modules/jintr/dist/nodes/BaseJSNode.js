export default class BaseJSNode {
    constructor(node, visitor) {
        this.node = node;
        this.visitor = visitor;
    }
    run() { }
}
