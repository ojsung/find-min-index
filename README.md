# find-min-index
A function to find the index of the least, defined number in an array.  If there is an index to be ignored, it will ignore that index.

## Usage
```typescript
import { findMinIndex } from 'find-min-index'

const arrayOfNumbers: number[] = [1, 3, 1, undefined, 2, -1, undefined, 6, 7, undefined, 8, -1]
const leastNumberIndex: number = findMinIndex(arrayOfNumbers) // expect 5
const leastNumberIndexNotIndex5: number = findMinIndex(arrayOfNumbers, [5]) // expect 11
const leastNumberIndexNotIndex5Or11: number = findMinIndex(arrayOfNumbers, [5, 11]) // expect 0
```