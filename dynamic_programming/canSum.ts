// Given a target sum and array of numbers 
// Return a boolean to indicate whether the numbers can generate the targetSum
// Assume all numbers are non-negative
// Assume elements of array can be reused

// Time: O(m^n), n = target sum, m = array length
// Space: O(n)
const bruteForceCanSum = (targetSum : number, numbers : number[]) : boolean => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (bruteForceCanSum(remainder, numbers)) {
      return true;
    }
  }
  return false;
}

console.log('bruteForceCanSum(7, [5,3,4,7]) should return true:', bruteForceCanSum(7, [5,3,4,7]));
console.log('bruteForceCanSum(7, [2, 4]) should return false: ', bruteForceCanSum(7, [2, 4]));
// console.log('bruteForceCanSum(300, [7,14]) should return true: ', bruteForceCanSum(300, [7,14]));

// Time: O(n * m), n = target sum, m = array length
// Space: O(n)
const dynamicCanSum = (targetSum : number, numbers : number[], memo : Record<number, boolean> = {}) : boolean => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const canSum = dynamicCanSum(remainder, numbers, memo); 
    if (canSum) {
      return true;
    }
    memo[targetSum] = canSum;
  }
  return false;
}

console.log('dynamicCanSum(7, [5,3,4,7]) should return true:', dynamicCanSum(7, [5,3,4,7]));
console.log('dynamicCanSum(7, [2, 4]) should return false: ', dynamicCanSum(7, [2, 4]));
console.log('dynamicCanSum(300, [7,14]) should return false: ', dynamicCanSum(300, [7,14]));
console.log('dynamicCanSum(300, [10,14]) should return true: ', dynamicCanSum(300, [10,14]));

// Time: O(n * m), n = target sum, m = array length
// Space: O(n)
const iterativeCanSum = (targetSum : number, numbers : number[]) : boolean => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (!table[i]) continue;

    for (let num of numbers) {
      if ((i+num) < table.length) {
        table[i+num] = true;
      }
    }
  }
  return table[table.length - 1];
}

console.log('iterativeCanSum(7, [5,3,4,7]) should return true:', iterativeCanSum(7, [5,3,4,7]));
console.log('iterativeCanSum(7, [2, 4]) should return false: ', iterativeCanSum(7, [2, 4]));
console.log('iterativeCanSum(300, [7,14]) should return false: ', iterativeCanSum(300, [7,14]));
console.log('iterativeCanSum(300, [10,14]) should return true: ', iterativeCanSum(300, [10,14]));