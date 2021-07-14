// Given a target word and a wordBank (an array of strings)
// Return a 2D array containing all the ways the target can be constructed
// from the words in the wordBank

// Assume each word in wordBank is length >= 1
// Assume that you can reuse each word as many times as possible

// Time: O(n^m * m), m = length of targetword, n = number of words in word bank
// Space: O(m * m)
const bruteForceAllConstruct = (targetWord: string, wordBank: string[]) : string[][] => {
  if (targetWord === '') return [[]];

  const allWaysToConstruct = [];

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length);
      const suffixWays = bruteForceAllConstruct(suffix, wordBank);
      const targetPaths = suffixWays.map(way => [ word, ...way ]);
      allWaysToConstruct.push(...targetPaths);
    }
  }

  return allWaysToConstruct;
}

console.log('bruteForceAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) should return [[purpl, le], [p, ur, p, le]]:',
  bruteForceAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log('bruteForceAllConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]) should return \
  [\
    [ab, cd, ef],\
    [ab, c, def]\
    [abc, def]\
    [abcd, ef]\
  ]: ',
  bruteForceAllConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log('bruteForceAllConstruct("hello", ["cat", "dog", "mouse"]) should return []: ', bruteForceAllConstruct("hello", ["cat", "dog", "mouse"]));
var arr = ["f",
  "ff",
  "fff",
  "ffff",
  "fffff",
  "ffffff",
  "fffffff",
  "fffffffff"
]
console.log(`bruteForceAllConstruct("fffffffffffffffffffe", ${arr}) should return []: `, bruteForceAllConstruct("fffffffffffffffffffe", arr));

// Time: O(n * m * m), m = length of targetword, n = number of words in word bank
// Space: O(m * m)
const dynamicAllConstruct = (targetWord: string, wordBank: string[], memo: Record<string, string[][]> = {}) : string[][] => {
  if (targetWord in memo) return memo[targetWord];
  if (targetWord === '') return [[]];

  const allWaysToConstruct = [];

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length);
      const suffixWays = dynamicAllConstruct(suffix, wordBank, memo);
      const targetPaths = suffixWays.map(way => [ word, ...way ]);
      allWaysToConstruct.push(...targetPaths);
    }
  }

  memo[targetWord] = allWaysToConstruct;
  return allWaysToConstruct;
}

console.log('dynamicAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) should return [[purpl, le], [p, ur, p, le]]:',
  dynamicAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log('dynamicAllConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]) should return \
  [\
    [ab, cd, ef],\
    [ab, c, def]\
    [abc, def]\
    [abcd, ef]\
  ]: ',
  dynamicAllConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log('dynamicAllConstruct("hello", ["cat", "dog", "mouse"]) should return []: ', dynamicAllConstruct("hello", ["cat", "dog", "mouse"]));
var arr = ["f",
  "ff",
  "fff",
  "ffff",
  "fffff",
  "ffffff",
  "fffffff",
  "fffffffff"
]
console.log(`dynamicAllConstruct("fffffffffffffffffffe", ${arr}) should return []: `, dynamicAllConstruct("fffffffffffffffffffe", arr));

