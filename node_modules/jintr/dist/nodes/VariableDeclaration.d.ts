import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class VariableDeclaration extends BaseJSNode<ESTree.VariableDeclaration> {
    run(): void;
}
