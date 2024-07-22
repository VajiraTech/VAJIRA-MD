import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class IfStatement extends BaseJSNode<ESTree.IfStatement> {
    run(): any;
}
