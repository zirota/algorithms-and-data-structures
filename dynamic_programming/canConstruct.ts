// Given a target word and a wordBank (an array of strings)
// Return a boolean indicating whether or not target can be constructed
// from the words in the wordBank

// Assume each word in wordBank is length >= 1
// Assume that you can reuse each word as many times as possible

// Time: O(m^n * n), n = length of targetWord, m = number of words in wordBank
// Space: O(n)
const bruteForceCanConstruct = (targetWord: string, wordBank: string[]): boolean => {
  if (targetWord === '') return true;

  for (let word of wordBank) {
    const index = targetWord.indexOf(word);
    if (index === 0) {
      const result = bruteForceCanConstruct(targetWord.slice(word.length), wordBank); // TIP: slicing involves copying
      if (result) {
        return result;
      }
    }
  }

  return false;
}

console.log('bruteForceCanConstruct("abcdef", ["ab","abc","cd","def","abcd"]) should return true:', bruteForceCanConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log('bruteForceCanConstruct("skateboard", ["bo","rd","ate","t","ska", "sk", "boar"]) should return false: ', bruteForceCanConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
var arr = ["f",
  "ff",
  "fff",
  "ffff",
  "fffff",
  "ffffff",
  "fffffff",
  "fffffffff"
]
console.log(`bruteForceCanConstruct("fffffffffffffffffffe", ${arr}) should return false: `, bruteForceCanConstruct("fffffffffffffffffffe", arr));

// Time: O(m * n * n), n = length of targetWord, m = number of words in wordBank
// Time: O(n^2)
const dynamicCanConstruct = (targetWord: string, wordBank: string[], memo: Record<string, boolean> = {}): boolean => {
  if (targetWord in memo) return memo[targetWord];
  if (targetWord === '') return true;

  for (let word of wordBank) {
    const index = targetWord.indexOf(word);
    if (index === 0) {
      const result = dynamicCanConstruct(targetWord.slice(word.length), wordBank, memo); // TIP: slicing involves copying
      memo[targetWord] = result;
      if (result) {
        return result;
      }
    }
  }
  memo[targetWord] = false;
  return false;
}

console.log('dynamicCanConstruct("abcdef", ["ab","abc","cd","def","abcd"]) should return true:', dynamicCanConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log('dynamicCanConstruct("skateboard", ["bo","rd","ate","t","ska", "sk", "boar"]) should return false: ', dynamicCanConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(`dynamicCanConstruct("fffffffffffffffffffe", ${arr}) should return false: `, dynamicCanConstruct("fffffffffffffffffffe", arr));