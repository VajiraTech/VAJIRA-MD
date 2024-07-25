import ESTree from 'estree';
import Visitor from '../visitor.js';
export default class BaseJSNode<T extends ESTree.BaseNode = ESTree.BaseNode> {
    node: T;
    visitor: Visitor;
    constructor(node: T, visitor: Visitor);
    run(): any;
}
