// Sum of previous 2 number in the sequence
// if (1) = fibonacci(1) = 1
// if (2) = fibonacci(2) = 1
// if (3) = fibonacci(3) = 2


// Time: O(2^n)
// Space: O(n)
const recursiveFib = (n: number) : number => {
  if (n <= 2) return 1;
  return recursiveFib(n-1) + recursiveFib(n-2);
}

const dynamicRecursiveFib = (n: number, memo = {}) : number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = dynamicRecursiveFib(n-1, memo) + dynamicRecursiveFib(n-2, memo);
  return memo[n]
}

// Time: O(n)
// Space: O(n)
const dynamicIterativeFib = (n: number) : number => {
  if (n <= 0) return -1;
  if (n <= 2) return 1;
  const memory = [1 , 1]; // Can use 2 variable to get O(1) memory
  for (let i = 2; i < n; i++) {
    const num1 = memory[i - 2];
    const num2 = memory[i - 1];
    const sum = num1 + num2;
    memory.push(sum); 
  }
  return memory.pop()!;
}

console.log('dynamicIterativeFib: ', dynamicIterativeFib(1));
console.log('dynamicIterativeFib(2): ', dynamicIterativeFib(2));
console.log('dynamicIterativeFib(3): ', dynamicIterativeFib(3));
console.log('dynamicIterativeFib(50): ', dynamicIterativeFib(50));