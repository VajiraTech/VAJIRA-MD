import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class ForOfStatement extends BaseJSNode<ESTree.ForOfStatement> {
    run(): any;
}
