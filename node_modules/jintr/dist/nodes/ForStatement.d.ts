import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class ForStatement extends BaseJSNode<ESTree.ForStatement> {
    run(): any;
}
