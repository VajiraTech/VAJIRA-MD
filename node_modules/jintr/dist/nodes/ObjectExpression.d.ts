import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class ObjectExpression extends BaseJSNode<ESTree.ObjectExpression> {
    run(): {
        [key: string]: any;
    };
}
