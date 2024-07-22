import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class ReturnStatement extends BaseJSNode<ESTree.ReturnStatement> {
    run(): any;
}
