import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class ConditionalExpression extends BaseJSNode<ESTree.ConditionalExpression> {
    run(): any;
}
