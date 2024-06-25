function abberiviateForm(name) {
  // 🌟 Split the name into an array of words
  let words = name.split(" ");

  // 🛑 If there's only one word, return it as is
  if (words.length < 2) {
    return name;
  }

  // ✨ Get the first word and the first letter of the second word
  let firstName = words[0];
  let lastNameInitial = words[1].charAt(0) + ".";

  // 💡 Return the formatted name using two different methods
  const method1 = `${firstName} ${lastNameInitial}`;

  // 🔍 Using split and map()
  let abbrevWords = words
    .map((word, index) => (index === 1 ? word.charAt(0) + "." : word))
    .join(" ");

  return { method1, abbrevWords };
}

// 🚀 Test the function
console.log(abberiviateForm("Robin Singh")); // Output: { method1: 'Robin S.', abbrevWords: 'Robin S.' }
console.log(abberiviateForm("John Wick")); // Output: { method1: 'John W.', abbrevWords: 'John W.' }
