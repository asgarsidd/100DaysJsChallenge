const startWithSubstring = (str, subString) => {
  // 1. The startsWith() method 👉 returns true if a string starts with a specified string.
  // Otherwise it returns false.

  return str.toLowerCase().startsWith(subString.toLowerCase());

  //2.Through using Slice()👇
  return (
    str.toLowerCase().slice(0, subString.length) === subString.toLowerCase()
  );
};

console.log(startWithSubstring("Hello world", "hello")); //output: true
console.log(startWithSubstring("Hello world", "Hello")); //output: true
