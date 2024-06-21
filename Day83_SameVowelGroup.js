const sameVowelGroup = (words) => {
  // 🚀 Helper function to extract vowels from a word and return them as a sorted string
  const extractVowels = (word) => {
    const vowels = word.match(/[aeiou]/g) || [];
    return [...new Set(vowels)].sort().join("");
  };

  // 🔍 Extract vowels from the first word
  const firstWordVowels = extractVowels(words[0]);

  // 🎯 Filter words that have the same vowels as the first word
  return words.filter((word) => extractVowels(word) === firstWordVowels);
};

// 🧪 Test cases
console.log(sameVowelGroup(["toe", "ocelot", "maniac"])); // ➞ ["toe", "ocelot"]
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); // ➞ ["many"]
console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])); // ➞ ["hoops", "bot", "bottom"]
