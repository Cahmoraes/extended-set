# Extended Set

Extended Set is a Set Data structure with extended functionalities .
Its role is to elegantly handle situations that can generate an error.

## map

Map a new Set with callback function.

### property

```ts
- callback: (originalSet) => mappedSet
  // Returns the wrapped value
```

### example

```ts
const set = new ExtendedSet<number>()
set.add(2).add(3).add(10)

const result = set.map((item) => item * 2)
console.log(result) // Set {4, 6, 20}
```

<br>

## filter

Filter a new Set with callback function.

### property

```ts
- callback: (originalSet) => filteredSet
  // Returns the wrapped value
```

### example:

```ts
const set = new ExtendedSet<number>([1, 2, 3, 4, 5])
const evenSet = set.filter((item) => item % 2 === 0)

console.log(evenSet) // Set {2, 4}
```

---

<br>

## reduce

Create a new Set based in a reducer function.

### property

```ts
- callback: (originalSet) => reducedValue
  // Returns the wrapped value
```

### example

```ts
const set = new ExtendedSet<number>()
set.add(2).add(3).add(0).add(5).add(20)

const smallestNumber = set.reduce((acc, item) => (acc > item ? item : acc))
console.log(smallestNumber) // 0
```
