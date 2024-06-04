
  // 🔻Using basic loop
  const mumlingString = (str) => {
    // 🔻Using basic loop
    let result = ""; // This will store the final result
    for (let i = 0; i < str.length; i++) {
      // 🔤 Add the uppercase version of the current character
      result += str[i].toUpperCase();
      // 🔡 Add the lowercase version of the current character (repeated i times)
      for (let j = 0; j < i; j++) {
        result += str[i].toLowerCase();
      }
      // ➖ Add a hyphen if this is not the last character
      if (i < str.length - 1) {
        result += "-";
      }
    }
    // 👇Using Map, repeat, charAt method
    return str
      .split("") // 🌀 For convert into array
      .map(
        (char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)
      ) // 🔄 Transform each character
      .join("-"); // 🔗 Join with hyphens

    return result; // 🔚 Return the final result
  };

  // 🧪 Test cases
  console.log(mumlingString("abcd")); // 'A-Bb-Ccc-Dddd'
  console.log(mumlingString("cwAt")); // 'C-Ww-Aaa-Tttt'
  console.log(mumlingString("RqaEzty")); // 'R-Qq-Aaa-Eeee
