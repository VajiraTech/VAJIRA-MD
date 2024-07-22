import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class BlockStatement extends BaseJSNode<ESTree.BlockStatement> {
    run(): any;
}
