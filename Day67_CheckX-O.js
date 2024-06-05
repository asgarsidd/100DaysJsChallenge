const XO = (str) => {
  /*Check to see if a string has the same amount of 'x's and 'o's.
    The method must return a boolean and be case insensitive.
    The input string can contain any character. */
  const lowerStr = str.toLowerCase();

  // By Using simple loops📍
  let result = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (str[i] === "x") {
      result++;
    } else if (str[i] === "o") {
      result--;
    }
    return !result;

    //By Using Filter, Split Method🔽
    const countX = lowerStr.split("").filter((letter) => letter === "x").length;
    const countO = lowerStr.split("").filter((letter) => letter === "o").length;

    return countX === countO;
  }
};

console.log(XO("xo")); // true
console.log(XO("Oo")); // false
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("ooom")); // false
console.log(XO("ty")); // true (when no 'x' and 'o' is present should return true)
