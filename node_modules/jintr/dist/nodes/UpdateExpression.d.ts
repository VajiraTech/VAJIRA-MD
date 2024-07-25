import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class UpdateExpression extends BaseJSNode<ESTree.UpdateExpression> {
    run(): any;
}
