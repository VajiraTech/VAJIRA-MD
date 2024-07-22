import type ESTree from 'estree';
import BaseNode from './BaseJSNode.js';
export default class ArrayExpression extends BaseNode<ESTree.ArrayExpression> {
    run(): any[];
}
