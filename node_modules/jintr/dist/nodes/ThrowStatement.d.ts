import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class ThrowStatement extends BaseJSNode<ESTree.ThrowStatement> {
    run(): void;
}
