type CallbackFilter<Type> = (args: Type) => boolean

type CallbackReduce<InitialType, Type> = (
  previousValue: InitialType,
  currentValue: Type,
) => InitialType

type CallbackFind<Type> = (item: Type) => boolean
type CallbackEvery<Type> = CallbackFind<Type>
type CallbackSome<Type> = CallbackFind<Type>
type CallbackMap<TInput, TOutput> = (arg: TInput) => TOutput

export default class ExtendedSet<Type> extends Set<Type> {
  static of<Type>(anArray: Type[]) {
    return new ExtendedSet<Type>(anArray)
  }

  public filter(callbackFilterFn: CallbackFilter<Type>) {
    const filteredSet = new ExtendedSet<Type>()
    for (const item of this) {
      if (!callbackFilterFn(item)) continue
      filteredSet.add(item)
    }
    return filteredSet
  }

  public reduce(callbackReduce: CallbackReduce<Type, Type>): Type
  public reduce<InitialType>(
    callbackReduce: CallbackReduce<InitialType, Type>,
    initialValue: InitialType,
  ): InitialType
  public reduce(...args: any[]) {
    const [callbackReduce, initialValue] = args
    if (isInvalidInitialValue()) {
      const [first, ...restSet] = this
      return internalReduce(restSet, first)
    }

    return internalReduce(this, initialValue)
    function isInvalidInitialValue(): boolean {
      return initialValue === undefined || initialValue === null
    }
    function internalReduce(set: Set<Type> | Type[], initialValue: any) {
      let result = initialValue
      for (const item of set) {
        result = callbackReduce(result, item)
      }
      return result
    }
  }

  public map<TOutput>(
    callback: CallbackMap<Type, TOutput>,
  ): ExtendedSet<TOutput> {
    const result = new ExtendedSet<TOutput>()
    for (const item of this) {
      result.add(callback(item))
    }
    return result
  }

  public find(callback: CallbackFind<Type>): Type | null {
    for (const item of this) {
      if (callback(item)) return item
    }
    return null
  }

  public every(callback: CallbackEvery<Type>): boolean {
    for (const item of this) {
      if (!callback(item)) return false
    }
    return true
  }

  public some(callback: CallbackSome<Type>): boolean {
    for (const item of this) {
      if (callback(item)) return true
    }
    return false
  }

  public isSuperSetOf<TSuperSet extends Type>(other: Set<TSuperSet>): boolean {
    for (const item of other) {
      if (!this.has(item)) return false
    }
    return true
  }

  public isSubSetOf(other: Set<Type>): boolean {
    for (const item of this) {
      if (!other.has(item)) return false
    }
    return true
  }

  public union<TSubSet extends Type>(
    ...others: Set<TSubSet>[]
  ): ExtendedSet<Type> {
    return this.performUnionSets([this, ...others])
  }

  private performUnionSets<TSubSet extends Type>(others: Set<TSubSet>[]) {
    const unionSets = new ExtendedSet<Type>()
    for (const set of others) {
      for (const item of set) unionSets.add(item)
    }
    return unionSets
  }

  public intersection<TIntersectionSet extends Type>(
    other: Set<TIntersectionSet>,
  ): ExtendedSet<Type> {
    const intersectionSet = new ExtendedSet<Type>()
    for (const item of other) {
      if (this.has(item)) intersectionSet.add(item)
    }
    return intersectionSet
  }

  public difference<TDifferenceSet extends Type>(
    other: Set<TDifferenceSet>,
  ): ExtendedSet<Type> {
    const differenceSet = new ExtendedSet<Type>()
    for (const item of other) {
      if (!this.has(item)) differenceSet.add(item)
    }
    return differenceSet
  }

  public toArray(): Type[] {
    return [...this]
  }

  get [Symbol.toStringTag]() {
    return 'ExtendedSet'
  }

  public toString() {
    return [...this].join()
  }
}
