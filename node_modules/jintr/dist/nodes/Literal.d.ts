import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class Literal extends BaseJSNode<ESTree.Literal> {
    run(): string | number | bigint | boolean | RegExp | null | undefined;
}
