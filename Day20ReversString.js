const reverseString = (str) => {
  // 1. Through basic loop:::👇

  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);

  //   2.Through built methods:::👇
  return str.split("").reverse().join("");

  // 3. Through Recursion:::👇
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substring(1)) + str.charAt(0);
  }
};

console.log(reverseString("Happy")); //output: yppaH
console.log(reverseString("hello")); //output: olleh
