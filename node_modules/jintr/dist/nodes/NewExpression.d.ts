import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class NewExpression extends BaseJSNode<ESTree.NewExpression> {
    run(): any;
}
