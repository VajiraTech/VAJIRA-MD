import type ESTree from 'estree';
import BaseJSNode from './BaseJSNode.js';
export default class Property extends BaseJSNode<ESTree.Property> {
    #private;
    run(): void | {
        [x: number]: any;
    };
}
