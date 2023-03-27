import { describe, it, expect } from 'vitest'
import ExtendedSet from '../src'

describe('EnhancementSet', () => {
  it('should create an EnhancementSet instance', () => {
    const set = new ExtendedSet()
    expect(set).instanceOf(ExtendedSet)
  })

  it('should return the minimum value of Set, as primitive value', () => {
    const set = new ExtendedSet<number>()
    set.add(2).add(3).add(0).add(5).add(20)
    const smallestNumber = set.reduce((acc, item) => (acc > item ? item : acc))
    expect(smallestNumber).toBe(0)
  })

  it('should return the minimum value of Set,as nno-primitive value', () => {
    const set = new ExtendedSet<number>()
    set.add(2).add(3).add(10)
    const result = set.reduce(
      (acc, item) => {
        if (acc.result > item) return { result: item }
        return acc
      },
      { result: Infinity },
    )
    expect(result).toMatchObject({ result: 2 })
  })

  it('should return the new set with mapped values', () => {
    const set = new ExtendedSet<number>()
    set.add(2).add(3).add(10)
    const result = set.map((item) => item * 2)
    expect(result.has(4)).toBeTruthy()
    expect(result.has(6)).toBeTruthy()
    expect(result.has(20)).toBeTruthy()
  })

  it('should filter even elements in Set', () => {
    const set = new ExtendedSet<number>([1, 2, 3, 4, 5])
    const evenSet = set.filter((item) => item % 2 === 0)
    expect(evenSet.has(2)).toBeTruthy()
    expect(evenSet.has(4)).toBeTruthy()
    expect(evenSet.has(1)).toBeFalsy()
  })

  it('should return true when a Set is super set of other set', () => {
    const set = new ExtendedSet<number>([1, 2, 3, 4])
    const result = set.isSuperSetOf(new ExtendedSet<number>([1, 2, 4]))
    expect(result).toBeTruthy()
  })

  it('should return false when a Set is not super set of other set', () => {
    const set = new ExtendedSet<number>([1, 2, 3, 4])
    const result = set.isSuperSetOf(new ExtendedSet<number>([5, 2, 4]))
    expect(result).toBeFalsy()
  })

  it('should return an union of Sets', () => {
    const numbers_1 = [1, 2, 3, 4]
    const numbers_2 = [5, 6, 7, 8]
    const set_1 = new ExtendedSet<number>(numbers_1)
    const set_2 = new ExtendedSet<number>(numbers_2)
    const result = set_1.union(set_2)

    expect(result.isSuperSetOf(set_1)).toBeTruthy()
    expect(result.isSuperSetOf(set_2)).toBeTruthy()
    expect([...result]).toEqual(numbers_1.concat(numbers_2))
  })

  it('should return an Array', () => {
    const numbers_1 = [1, 2, 3, 4]
    const set = new ExtendedSet<number>(numbers_1)
    const result = set.toArray()

    expect(result).toEqual(numbers_1)
  })

  it('should return an Intersection of Sets', () => {
    const numbers_1 = [1, 2, 3, 4]
    const numbers_2 = [5, 3, 1, 8]

    const set_1 = new ExtendedSet<number>(numbers_1)
    const set_2 = new ExtendedSet<number>(numbers_2)
    const result = set_1.intersection(set_2)

    expect(result.toArray()).toEqual([3, 1])
  })

  it('should return a Difference between of Sets', () => {
    const numbers_1 = [1, 2, 3, 4]
    const numbers_2 = [5, 3, 1, 8]

    const set_1 = new ExtendedSet<number>(numbers_1)
    const set_2 = new ExtendedSet<number>(numbers_2)
    const result = set_1.difference(set_2)

    expect(result.toArray()).toEqual([5, 8])
  })
})
