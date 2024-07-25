import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class ThisExpression extends BaseJSNode<ESTree.ThisExpression> {
    run(): any;
}
