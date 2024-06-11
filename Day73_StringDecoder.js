const duplicateEncode = (word) => {
  // Duplicate Encoder using reduce👇
  const lowerCaseWord = word.toLowerCase().split("");
  const charCount = lowerCaseWord.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return lowerCaseWord
    .map((char) => (charCount[char] === 1 ? "(" : ")"))
    .join("");
};

console.log(duplicateEncode("din")); // '((('
console.log(duplicateEncode("(( @")); // '))(('
console.log(duplicateEncode("recede")); // '()()()'
console.log(duplicateEncode("Success")); // ')())())'
