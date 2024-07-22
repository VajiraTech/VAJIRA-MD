import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class BinaryExpression extends BaseJSNode<ESTree.BinaryExpression> {
    run(): any;
}
