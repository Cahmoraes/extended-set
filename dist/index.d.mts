type CallbackFilter<Type> = (args: Type) => boolean;
type CallbackReduce<InitialType, Type> = (previousValue: InitialType, currentValue: Type) => InitialType;
type CallbackFind<Type> = (item: Type) => boolean;
type CallbackEvery<Type> = CallbackFind<Type>;
type CallbackSome<Type> = CallbackFind<Type>;
type CallbackMap<TInput, TOutput> = (arg: TInput) => TOutput;
declare class ExtendedSet<Type> extends Set<Type> {
    static of<Type>(anArray: Type[]): ExtendedSet<Type>;
    filter(callbackFilterFn: CallbackFilter<Type>): ExtendedSet<Type>;
    reduce(callbackReduce: CallbackReduce<Type, Type>): Type;
    reduce<InitialType>(callbackReduce: CallbackReduce<InitialType, Type>, initialValue: InitialType): InitialType;
    map<TOutput>(callback: CallbackMap<Type, TOutput>): ExtendedSet<TOutput>;
    find(callback: CallbackFind<Type>): Type | null;
    every(callback: CallbackEvery<Type>): boolean;
    some(callback: CallbackSome<Type>): boolean;
    isSuperSetOf<TSuperSet extends Type>(other: Set<TSuperSet>): boolean;
    isSubSetOf(other: Set<Type>): boolean;
    union<TSubSet extends Type>(...others: Set<TSubSet>[]): ExtendedSet<Type>;
    private performUnionSets;
    intersection<TIntersectionSet extends Type>(other: Set<TIntersectionSet>): ExtendedSet<Type>;
    difference<TDifferenceSet extends Type>(other: Set<TDifferenceSet>): ExtendedSet<Type>;
    toArray(): Type[];
    get [Symbol.toStringTag](): string;
    toString(): string;
}

export { ExtendedSet as default };
