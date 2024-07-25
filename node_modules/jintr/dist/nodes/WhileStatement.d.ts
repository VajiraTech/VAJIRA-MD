import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class WhileStatement extends BaseJSNode<ESTree.WhileStatement> {
    run(): any;
}
