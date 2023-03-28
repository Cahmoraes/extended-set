type CallbackFilterFn<T> = (args: T) => boolean

type CallbackReduce<InitialType, T> = (
  previousValue: InitialType,
  currentValue: T,
) => InitialType

type CallbackMap<TInput, TOutput> = (arg: TInput) => TOutput

export default class ExtendedSet<T> extends Set<T> {
  static of<T>(anArray: T[]) {
    return new ExtendedSet<T>(anArray)
  }

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

  isSuperSetOf<TSuperSet extends T>(other: Set<TSuperSet>): boolean {
    for (const item of other) {
      if (!this.has(item)) return false
    }
    return true
  }

  isSubSetOf(other: Set<T>): boolean {
    for (const item of this) {
      if (!other.has(item)) return false
    }
    return true
  }

  union<TSubSet extends T>(...others: Set<TSubSet>[]): ExtendedSet<T> {
    return this._unionSets([this, ...others])
  }

  intersection<TIntersectionSet extends T>(
    other: Set<TIntersectionSet>,
  ): ExtendedSet<T> {
    const intersectionSet = new ExtendedSet<T>()
    for (const item of other) {
      if (this.has(item)) intersectionSet.add(item)
    }
    return intersectionSet
  }

  difference<TDifferenceSet extends T>(
    other: Set<TDifferenceSet>,
  ): ExtendedSet<T> {
    const differenceSet = new ExtendedSet<T>()
    for (const item of other) {
      if (!this.has(item)) differenceSet.add(item)
    }
    return differenceSet
  }

  toArray(): T[] {
    return [...this]
  }

  get [Symbol.toStringTag]() {
    return 'ExtendedSet'
  }

  toString() {
    return [...this].join()
  }

  private _unionSets<TSubSet extends T>(others: Set<TSubSet>[]) {
    const unionSets = new ExtendedSet<T>()
    for (const set of others) {
      for (const item of set) unionSets.add(item)
    }
    return unionSets
  }
}
