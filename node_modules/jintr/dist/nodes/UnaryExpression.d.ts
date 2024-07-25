import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class UnaryExpression extends BaseJSNode<ESTree.UnaryExpression> {
    run(): number | boolean | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | undefined;
}
