import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class AssignmentExpression extends BaseJSNode<ESTree.AssignmentExpression> {
    run(): any;
}
