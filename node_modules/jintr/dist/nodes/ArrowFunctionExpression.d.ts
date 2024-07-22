import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class ArrowFunctionExpression extends BaseJSNode<ESTree.ArrowFunctionExpression> {
    run(): Function;
}
