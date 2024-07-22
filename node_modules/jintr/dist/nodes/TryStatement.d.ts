import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class TryStatement extends BaseJSNode<ESTree.TryStatement> {
    run(): any;
}
