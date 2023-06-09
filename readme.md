# Extended Set

Extended Set is a Set Data structure with extended functionalities.
It implements map, reduce and filter functions. In addiction, provides methods to handle Set basic operations.

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

## find

Find an item in Set. Returns the item or null.

### property

```ts
- callback: (item: Type) => boolean
```

### example

```ts
const users = [{ name: 'John' }, { name: 'George' }, { name: 'Jackie' }]
const set = ExtendedSet.of(users)

const findGeorge = set.find((item) => item.name === 'George')
console.log(findGeorge) // { name: 'George' }

const findAnnie = set.find((item) => item.name === 'Annie')
console.log(findAnnie) // null
```

---

<br>

## every

Return true when every element in Set is truthy, else return false

### property

```ts
- callback: (item: Type) => boolean
```

### example

```ts
const users = [1, 2, 3]
const set = ExtendedSet.of(users)

const numbersAreGreaterThanZero = set.every((number) => number > 0)
console.log(numbersAreGreaterTahZero) // true

const numbersAreLessThanZero = set.every((number) => number < 0)
console.log(numbersAreLessThanZero) // false
```

---

<br>

## some

Return true when some element in Set is truthy, else return false

### property

```ts
- callback: (item: Type) => boolean
```

### example

```ts
const numbers = [1, -2, 3, 4]
const set = ExtendedSet.of(numbers)

const isThereNumberLessThanZero = set.some((item) => item < 0)
console.log(isThereNumberLessThanZero) // true

const isThereNumberEqualsZero = set.some((item) => item === 0)
console.log(isThereNumberEqualsZero) // false
```

---

<br>

## of

Create a new Set from an array

### property

```ts
- anArray = []
// Array to convert into Set
```

### example

```ts
const set = ExtendedSet.of([1, 2, 3])
console.log(set.toString()) // 1,2,3
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
