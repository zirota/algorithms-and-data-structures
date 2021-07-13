// Given a target sum and array of numbers 
// Return an array containing any combination of numbers that adds up to the targetSum
// Assume all numbers are non-negative
// Assume elements of array can be reused

// Time: O(n*m * m), m = targetSum, n = size of array
// Space: O(m)
const bruteForceHowSum = (targetSum: number, numbers: number[]) : number[] | null => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const path = bruteForceHowSum(remainder, numbers);
    if (path !== null) {
      return [num, ...path]; // Require m steps (e.g. if targetSum = 100 & numbers = [1], this will have 50 items)
    }
  }
  return null;
}

console.log('bruteForceHowSum(7, [5,3,4,7]) should return [3,4]:', bruteForceHowSum(7, [5,3,4,7]));
console.log('bruteForceHowSum(7, [2, 4]) should return null: ', bruteForceHowSum(7, [2, 4]));
// console.log('bruteForceHowSum(300, [7,14]) should return null: ', bruteForceHowSum(300, [7,14]));

// Time: O(n*m^2), m = targetSum, n = size of array
// Space: O(m*n)
const dynamicHowSum = (targetSum: number, numbers: number[], memo: Record<number, number[] | null> = {}) : number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const path = dynamicHowSum(remainder, numbers, memo);
    if (path !== null) {
      memo[targetSum] = [num, ...path] 
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log('dynamicHowSum(7, [5,3,4,7]) should return [3,4]:', dynamicHowSum(7, [5,3,4,7]));
console.log('dynamicHowSum(7, [2, 4]) should return null: ', dynamicHowSum(7, [2, 4]));
console.log('dynamicHowSum(300, [7,14]) should return null: ', dynamicHowSum(300, [7,14]));