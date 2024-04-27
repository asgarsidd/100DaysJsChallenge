const truncateString = (str, num) => {
  // Using substring() method ::👇

  return str.length > num ? str.substring(0, num) + "..." : "string is Short";

  // Using For Loop ::👇

  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str[i];
  }
  return newStr + "...";

  // Using slice() method ::👇

  return str.length > num ? str.slice(0, num) + "..." : "string is Short";
};

console.log(truncateString("The-Largest number of", 1)); //Output : 'T'
console.log(truncateString("The-Largest number of", 3)); //Output : 'The...'
console.log(truncateString("The-Largest number of", 5)); //Output : 'The-L...'
console.log(truncateString("The-Largest number of", 8)); //Output : 'The-Larg...'
