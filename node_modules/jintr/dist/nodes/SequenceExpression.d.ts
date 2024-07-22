import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class SequenceExpression extends BaseJSNode<ESTree.SequenceExpression> {
    run(): any;
}
