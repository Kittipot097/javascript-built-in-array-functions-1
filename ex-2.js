let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.length >= 5
}

// const result = get5CharWords(words);
const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]