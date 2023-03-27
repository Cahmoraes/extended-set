type CallbackFilterFn<T> = (args: T) => boolean;
type CallbackReduce<InitialType, T> = (previousValue: InitialType, currentValue: T) => InitialType;
type CallbackMap<TInput, TOutput> = (arg: TInput) => TOutput;
declare class ExtendedSet<T> extends Set<T> {
    filter(callbackFilterFn: CallbackFilterFn<T>): ExtendedSet<T>;
    reduce(callbackReduce: CallbackReduce<T, T>): T;
    reduce<InitialType>(callbackReduce: CallbackReduce<InitialType, T>, initialValue: InitialType): InitialType;
    map<TOutput>(callback: CallbackMap<T, TOutput>): ExtendedSet<TOutput>;
}

export { ExtendedSet as default };
