// Given a target word and a wordBank (an array of strings)
// Return a number indicating the number of ways target can be constructed
// from the words in the wordBank

// Assume each word in wordBank is length >= 1
// Assume that you can reuse each word as many times as possible

// Time: O(n^m * m), m = length of target word, n = number of word in word bank
// Space: O(m^2)
const bruteForceCountConstruct = (targetWord: string, wordBank: string[]): number => {
  if (targetWord === '') return 1;

  let totalNumberOfWays = 0;
  for (let word of wordBank) {
    const count = targetWord.indexOf(word);
    if (count === 0) {
      const result = bruteForceCountConstruct(targetWord.slice(word.length), wordBank);
      totalNumberOfWays += result;
    }
  }
  return totalNumberOfWays;
}

console.log('bruteForceCountConstruct("abcdef", ["ab","abc","cd","def","abcd"]) should return 2:', bruteForceCountConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log('bruteForceCountConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) should return 1:', bruteForceCountConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log('bruteForceCountConstruct("skateboard", ["bo","rd","ate","t","ska", "sk", "boar"]) should return 0: ', bruteForceCountConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
var arr = ["f",
  "ff",
  "fff",
  "ffff",
  "fffff",
  "ffffff",
  "fffffff",
  "fffffffff"
]
// console.log(`bruteForceCountConstruct("ffffffffffffffffffffffffffffffffffe", ${arr}) should return 0: `,
//   bruteForceCountConstruct("ffffffffffffffffffffffffffffffffffe", arr));

// Time: O(n * m * m), m = length of target word, n = number of word in word bank
// Space: O(m^2)
const dynamicCountConstruct = (targetWord: string, wordBank: string[], memo: Record<string, number> = {}): number => {
  if (targetWord in memo) return memo[targetWord];
  if (targetWord === '') return 1;

  let totalNumberOfWays = 0;
  for (let word of wordBank) {
    const count = targetWord.indexOf(word);
    if (count === 0) {
      const result = dynamicCountConstruct(targetWord.slice(word.length), wordBank, memo);
    }
  }
  memo[targetWord] = totalNumberOfWays;
  return totalNumberOfWays;
}

console.log('dynamicCountConstruct("abcdef", ["ab","abc","cd","def","abcd"]) should return 2:', dynamicCountConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log('dynamicCountConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) should return 1:', dynamicCountConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log('dynamicCountConstruct("skateboard", ["bo","rd","ate","t","ska", "sk", "boar"]) should return 0: ', dynamicCountConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(`dynamicCountConstruct("fffffffffffffffffffe", ${arr}) should return 0: `, dynamicCountConstruct("fffffffffffffffffffe", arr));