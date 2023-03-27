# Extended Set

Extended Set is a Set Data structure with extended functionalities .
Its role is to elegantly handle situations that can generate an error.

## map

Map a new Set with callback function.

### property

```ts
- callback: (originalSet) => mappedSet
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
```

### example

```ts
const set = new ExtendedSet<number>()
set.add(2).add(3).add(0).add(5).add(20)

const smallestNumber = set.reduce((acc, item) => (acc > item ? item : acc))
console.log(smallestNumber) // 0
```

---

<br>

## toArray

Create a new Array from Set.

### example:

```ts
const set = new ExtendedSet<number>([1, 2, 3, 4, 5])
const numbers = set.toArray()

console.log(numbers) // [1, 2, 3, 4, 5]
```

---

<br>

## isSuperSetOf

Check if Set is a superset of other set.
Returns true if Set is a superset of other set. Else returns false.

### property

```ts
- other: Set
```

### example

```ts
const set_1 = new ExtendedSet<number>([1, 2, 3, 4])
const set_2 = new ExtendedSet<number>([1, 2])
const result = set_1.union(set_2)

console.log(result) // true
```

---

<br>

## isSubSetOf

Check if Set is a subset of other set.
Returns true if Set is a subset of other set. Else returns false.

### property

```ts
- other: Set
```

### example

```ts
const set_1 = new ExtendedSet<number>([1, 2])
const set_2 = new ExtendedSet<number>([1, 2, 3, 4])
const result = set_1.isSubSetOf(set_2)

console.log(result) // true
```

---

<br>

## union

Create new Set from an union of Sets.

### property

```ts
- others: Set[]
```

### example

```ts
const set_1 = new ExtendedSet<number>([1, 2, 3, 4])
const set_2 = new ExtendedSet<number>([1, 5])
const set_3 = new ExtendedSet<number>([6, 2])
const result = set_1.union(set_2, set_3)

console.log(result) // Set {1, 2, 3, 4, 5, 6}
```

---

<br>

## intersection

Create an intersection Set from Sets.

### property

```ts
- other: Set
```

### example

```ts
const set_1 = new ExtendedSet<number>([1, 2, 3, 4])
const set_2 = new ExtendedSet<number>([1, 4])
const result = set_1.intersection(set_2)

console.log(result) // Set {1, 4}
```

---

<br>

## difference

Create an intersection Difference from Sets.

### property

```ts
- other: Set
```

### example

```ts
const set_1 = new ExtendedSet<number>([1, 2, 3, 4])
const set_2 = new ExtendedSet<number>([1, 4])
const result = set_2.difference(set_1)

console.log(result) // Set {2, 3}
```
