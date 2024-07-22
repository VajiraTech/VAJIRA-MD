import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class FunctionExpression extends BaseJSNode<ESTree.FunctionExpression> {
    run(): Function;
}
