// Given a target sum and array of numbers 
// Return an array containing the shortest combination of numbers that adds up to the targetSum
// Assume all numbers are non-negative
// Assume elements of array can be reused

// TIP: For best combinations usually an exhaustive search is needed

// Time: O(n^m * m), m = targetSum, n = size of array
// Space: O(m * m)
const bruteForceBestSum = (targetSum: number, numbers: number[]) : number[] | null => {
  if (targetSum === 0) return [];
  if (targetSum < 0 ) return null;

  let shortestPath = null; // TIP: what is max size of this?

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderPath = bruteForceBestSum(remainder, numbers);
    if (remainderPath !== null) {
      const path = [num, ...remainderPath]; // TIP: remember to count time for copying array

      if (shortestPath === null || shortestPath.length > path.length) {
        shortestPath = path;
      }
    }
  }
  return shortestPath;
}

console.log('bruteForceBestSum(7, [5,3,4,7]) should return [7]:', bruteForceBestSum(7, [5,3,4,7]));
console.log('bruteForceBestSum(7, [2, 4]) should return null: ', bruteForceBestSum(7, [2, 4]));
// console.log('bruteForceBestSum(300, [7,14]) should return null: ', bruteForceBestSum(300, [7,14]));


// Time: O(m^2 * n), m = targetSum, n = size of array
// Space: O(m * m * n)
const dynamicBestSum = (targetSum: number, numbers: number[], memo: Record<number, number[] | null> = {}) : number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0 ) return null;

  let shortestPath = null; // TIP: what is max size of this?

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderPath = dynamicBestSum(remainder, numbers, memo);
    if (remainderPath !== null) {
      const path = [num, ...remainderPath]; // TIP: remember to count time for copying array
      memo[targetSum] = path;
      if (shortestPath === null || shortestPath.length > path.length) {
        shortestPath = path;
      }
    }
  }
  memo[targetSum] = shortestPath;
  return shortestPath;
}

console.log('dynamicBestSum(7, [5,3,4,7]) should return [7]:', dynamicBestSum(7, [5,3,4,7]));
console.log('dynamicBestSum(7, [2, 4]) should return null: ', dynamicBestSum(7, [2, 4]));
console.log('dynamicBestSum(300, [7,14]) should return null: ', dynamicBestSum(300, [7,14]));
console.log('dynamicBestSum(100, [1,2,5,25]) should return null: ', dynamicBestSum(100, [1,2,5,25]));