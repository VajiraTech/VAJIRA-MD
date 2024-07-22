import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class Identifier extends BaseJSNode<ESTree.Identifier> {
    run(): any;
}
