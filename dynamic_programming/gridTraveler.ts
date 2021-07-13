// Given grid of (m,n). Find number of ways a person can travel from top left to bottom right.
// Only can move right or down.

// Time: O(2^m+n) = O(2^n)
// Space: O(m + n) = O(n) -> Height of tree
const gridTraveler = (m: number, n: number) : number => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m-1, n) + gridTraveler(m, n-1);
}

console.log('gridTraveler(3,3):', gridTraveler(3, 3));
console.log('gridTraveler(0, 0): ', gridTraveler(0, 0));
console.log('gridTraveler(1, 1): ', gridTraveler(1, 1));
console.log('gridTraveler(2, 3): ', gridTraveler(2, 3));
// console.log('gridTraveler(50, 50): ', gridTraveler(50, 50));


// Time: O(m * n)
// Space: O(m + n) = O(n) -> Height of tree
const dynamicRecursiveGridTraveler = (m: number, n: number, memo : Record<string, number> = {}) : number => {
  if (`${m},${n}` in memo) return memo[`${m},${n}`];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[`${m},${n}`] =  dynamicRecursiveGridTraveler(m-1, n, memo) + dynamicRecursiveGridTraveler(m, n-1, memo);
  return memo[`${m},${n}`];
}

console.log('dynamicRecursiveGridTraveler(3,3):', dynamicRecursiveGridTraveler(3, 3));
console.log('dynamicRecursiveGridTraveler(0, 0): ', dynamicRecursiveGridTraveler(0, 0));
console.log('dynamicRecursiveGridTraveler(1, 1): ', dynamicRecursiveGridTraveler(1, 1));
console.log('dynamicRecursiveGridTraveler(2, 3): ', dynamicRecursiveGridTraveler(2, 3));
console.log('dynamicRecursiveGridTraveler(50, 50): ', dynamicRecursiveGridTraveler(50, 50));

