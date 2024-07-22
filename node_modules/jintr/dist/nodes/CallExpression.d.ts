import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class CallExpression extends BaseJSNode<ESTree.CallExpression> {
    #private;
    run(): any;
}
