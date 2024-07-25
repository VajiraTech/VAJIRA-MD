import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class SwitchStatement extends BaseJSNode<ESTree.SwitchStatement> {
    run(): any;
}
