import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class SwitchCase extends BaseJSNode<ESTree.SwitchCase> {
    run(): any;
}
