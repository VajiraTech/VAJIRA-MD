import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class MemberExpression extends BaseJSNode<ESTree.MemberExpression> {
    run(): any;
}
