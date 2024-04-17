const isUpperCase = (char) => {
  // 1. we can solve through Ascii value:-👇
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return false;
  }
  //2. Using UpperCase and Lowercase(easy)👇
  if (char === char.toUpperCase()) {
    return true;
  }
  if (char === char.toLowerCase()) {
    return false;
  }
};

console.log(isUpperCase("S")); //output: true
console.log(isUpperCase("d")); //output: false
