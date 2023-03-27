type CallbackFilterFn<T> = (args: T) => boolean

type CallbackReduce<InitialType, T> = (
  previousValue: InitialType,
  currentValue: T,
) => InitialType

type CallbackMap<TInput, TOutput> = (arg: TInput) => TOutput

export default class ExtendedSet<T> extends Set<T> {
  filter(callbackFilterFn: CallbackFilterFn<T>) {
    const filteredSet = new ExtendedSet<T>()
    for (const item of this) {
      if (!callbackFilterFn(item)) continue
      filteredSet.add(item)
    }
    return filteredSet
  }

  reduce(callbackReduce: CallbackReduce<T, T>): T
  reduce<InitialType>(
    callbackReduce: CallbackReduce<InitialType, T>,
    initialValue: InitialType,
  ): InitialType
  reduce(...args: any[]) {
    const [callbackReduce, initialValue] = args
    if (isInvalidInitialValue()) {
      const [first, ...restSet] = this
      return internalReduce(restSet, first)
    }

    return internalReduce(this, initialValue)
    function isInvalidInitialValue(): boolean {
      return initialValue === undefined || initialValue === null
    }
    function internalReduce(set: Set<T> | T[], initialValue: any) {
      let result = initialValue
      for (const item of set) {
        result = callbackReduce(result, item)
      }
      return result
    }
  }

  map<TOutput>(callback: CallbackMap<T, TOutput>) {
    const result = new ExtendedSet<TOutput>()
    for (const item of this) {
      result.add(callback(item))
    }
    return result
  }
}
