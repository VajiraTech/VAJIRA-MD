export declare class YTNode {
    #private;
    static readonly type: string;
    readonly type: string;
    constructor();
    /**
     * Check if the node is of the given type.
     * @param types - The type to check
     * @returns whether the node is of the given type
     */
    is<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K): this is InstanceType<K[number]>;
    /**
     * Cast to one of the given types.
     */
    as<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K): InstanceType<K[number]>;
    /**
     * Check for a key without asserting the type.
     * @param key - The key to check
     * @returns Whether the node has the key
     */
    hasKey<T extends string, R = any>(key: T): this is this & {
        [k in T]: R;
    };
    /**
     * Assert that the node has the given key and return it.
     * @param key - The key to check
     * @returns The value of the key wrapped in a Maybe
     * @throws If the node does not have the key
     */
    key<T extends string, R = any>(key: T): Maybe;
}
export declare class Maybe {
    #private;
    constructor(value: any);
    get typeof(): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    string(): string;
    isString(): boolean;
    number(): number;
    isNumber(): boolean;
    bigint(): bigint;
    isBigint(): boolean;
    boolean(): boolean;
    isBoolean(): boolean;
    symbol(): symbol;
    isSymbol(): boolean;
    undefined(): undefined;
    isUndefined(): boolean;
    null(): null;
    isNull(): boolean;
    object(): object;
    isObject(): boolean;
    function(): Function;
    isFunction(): boolean;
    /**
     * Get the value as an array.
     * @returns the value as any[]
     * @throws If the value is not an array
     */
    array(): any[];
    /**
     * More typesafe variant of {@link Maybe#array}.
     * @returns a proxied array which returns all the values as {@link Maybe}
     * @throws If the value is not an array
     */
    arrayOfMaybe(): Maybe[];
    /**
     * Check whether the value is an array.
     * @returns whether the value is an array
     */
    isArray(): boolean;
    /**
     * Get the value as a YTNode
     * @returns the value as a YTNode
     * @throws If the value is not a YTNode
     */
    node(): YTNode;
    /**
     * Check if the value is a YTNode
     * @returns Whether the value is a YTNode
     */
    isNode(): boolean;
    /**
     * Get the value as a YTNode of the given type.
     * @param type - The type to cast to
     * @returns The node casted to the given type
     * @throws If the node is not of the given type
     */
    nodeOfType<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K): InstanceType<K[number]>;
    /**
     * Check if the value is a YTNode of the given type.
     * @param type - the type to check
     * @returns Whether the value is a YTNode of the given type
     */
    isNodeOfType<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K): boolean;
    /**
     * Get the value as an ObservedArray.
     * @returns the value of the Maybe as a ObservedArray
     */
    observed(): ObservedArray<YTNode>;
    /**
     * Check if the value is an ObservedArray.
     */
    isObserved(): any;
    /**
     * Get the value of the Maybe as a SuperParsedResult.
     * @returns the value as a SuperParsedResult
     * @throws If the value is not a SuperParsedResult
     */
    parsed(): SuperParsedResult;
    /**
     * Is the result a SuperParsedResult?
     */
    isParsed(): boolean;
    /**
     * @deprecated This call is not meant to be used outside of debugging. Please use the specific type getter instead.
     */
    any(): any;
    /**
     * Get the node as an instance of the given class.
     * @param type - The type to check
     * @returns the value as the given type
     * @throws If the node is not of the given type
     */
    instanceof<T extends object>(type: Constructor<T>): T;
    /**
     * Check if the node is an instance of the given class.
     * @param type - The type to check
     * @returns Whether the node is an instance of the given type
     */
    isInstanceof<T extends object>(type: Constructor<T>): this is this & T;
}
export interface Constructor<T> {
    new (...args: any[]): T;
}
export interface YTNodeConstructor<T extends YTNode = YTNode> {
    new (data: any): T;
    readonly type: string;
}
/**
 * Represents a parsed response in an unknown state. Either a YTNode or a YTNode[] or null.
 */
export declare class SuperParsedResult<T extends YTNode = YTNode> {
    #private;
    constructor(result: T | ObservedArray<T> | null);
    get is_null(): boolean;
    get is_array(): boolean;
    get is_node(): boolean;
    array(): ObservedArray<T>;
    item(): T;
}
export type ObservedArray<T extends YTNode = YTNode> = Array<T> & {
    /**
     * Returns the first object to match the rule.
     */
    get: (rule: object, del_item?: boolean) => T | undefined;
    /**
     * Returns all objects that match the rule.
     */
    getAll: (rule: object, del_items?: boolean) => T[];
    /**
     * Returns the first object to match the condition.
     */
    matchCondition: (condition: (node: T) => boolean) => T | undefined;
    /**
     * Removes the item at the given index.
     */
    remove: (index: number) => T[];
    /**
     * Get all items of a specific type
     */
    filterType<R extends YTNode, K extends YTNodeConstructor<R>[]>(...types: K): ObservedArray<InstanceType<K[number]>>;
    /**
     * Get the first of a specific type
     */
    firstOfType<R extends YTNode, K extends YTNodeConstructor<R>[]>(...types: K): InstanceType<K[number]> | undefined;
    /**
     * Get the first item
     */
    first: () => T;
    /**
     * This is similar to filter but throws if there's a type mismatch.
     */
    as<R extends YTNode, K extends YTNodeConstructor<R>[]>(...types: K): ObservedArray<InstanceType<K[number]>>;
};
/**
 * Creates a trap to intercept property access
 * and add utilities to an object.
 */
export declare function observe<T extends YTNode>(obj: Array<T>): ObservedArray<T>;
export declare class Memo extends Map<string, YTNode[]> {
    getType<T extends YTNode, K extends YTNodeConstructor<T>[]>(types: K): ObservedArray<InstanceType<K[number]>>;
    getType<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K): ObservedArray<InstanceType<K[number]>>;
}
