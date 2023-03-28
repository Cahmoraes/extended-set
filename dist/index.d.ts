type CallbackFilterFn<T> = (args: T) => boolean;
type CallbackReduce<InitialType, T> = (previousValue: InitialType, currentValue: T) => InitialType;
type CallbackMap<TInput, TOutput> = (arg: TInput) => TOutput;
declare class ExtendedSet<T> extends Set<T> {
    static of<T>(anArray: T[]): ExtendedSet<T>;
    filter(callbackFilterFn: CallbackFilterFn<T>): ExtendedSet<T>;
    reduce(callbackReduce: CallbackReduce<T, T>): T;
    reduce<InitialType>(callbackReduce: CallbackReduce<InitialType, T>, initialValue: InitialType): InitialType;
    map<TOutput>(callback: CallbackMap<T, TOutput>): ExtendedSet<TOutput>;
    isSuperSetOf<TSuperSet extends T>(other: Set<TSuperSet>): boolean;
    isSubSetOf(other: Set<T>): boolean;
    union<TSubSet extends T>(...others: Set<TSubSet>[]): ExtendedSet<T>;
    intersection<TIntersectionSet extends T>(other: Set<TIntersectionSet>): ExtendedSet<T>;
    difference<TDifferenceSet extends T>(other: Set<TDifferenceSet>): ExtendedSet<T>;
    toArray(): T[];
    get [Symbol.toStringTag](): string;
    toString(): string;
    private _unionSets;
}

export { ExtendedSet as default };
