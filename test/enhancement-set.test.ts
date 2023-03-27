import { describe, it, expect } from 'vitest'
import ExtendedSet from '../src'

describe('EnhancementSet', () => {
  it('should create an EnhancementSet instance', () => {
    const set = new ExtendedSet()
    expect(set).instanceOf(ExtendedSet)
  })

  it('should return the minimum value of Set, as primitive value', () => {
    const set = new ExtendedSet<number>()
    set.add(2).add(3).add(10)
    const result = set.reduce((acc, item) => {
      if (acc > item) return item
      return acc
    })
    expect(result).toBe(2)
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
})
