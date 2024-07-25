export type PojoSet<T extends string | number> = {
    [key in T]: T;
};
export declare function toPojoSet<T extends string | number>(arr: readonly T[]): PojoSet<T>;
export declare function removeItem<T>(arr: T[], item: T): T[];
export declare function groupBy<T, U extends keyof T>(arr: T[], by: U): Map<T[U], T[]>;
