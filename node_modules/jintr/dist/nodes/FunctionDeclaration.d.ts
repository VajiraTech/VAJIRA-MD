import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class FunctionDeclaration extends BaseJSNode<ESTree.FunctionDeclaration> {
    run(): void;
}
