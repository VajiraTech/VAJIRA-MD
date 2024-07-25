import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class LogicalExpression extends BaseJSNode<ESTree.LogicalExpression> {
    run(): any;
}
