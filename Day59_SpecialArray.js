/* An array is special if every even index contains an
even number and every odd index contains an odd number.
Create a function that returns true if an array is special,
and false otherwise.*/
const isSpecialArray = (arr) => {
  // Initialize checks
  let evenCheck = true;
  let oddCheck = true;

  // Method 1: Loop through the array👇
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      // Even index
      if (arr[i] % 2 !== 0) {
        evenCheck = false;
        break;
      }
    } else {
      // Odd index
      if (arr[i] % 2 === 0) {
        oddCheck = false;
        break;
      }
    }
  }

  // Return true if both checks are true
  return evenCheck && oddCheck;

  // Method 2: using Reduce method👇
  return arr.reduce((isSpecial, num, index) => {
    if (index % 2 === 0 && num % 2 !== 0) {
      return false;
    } else if (index % 2 !== 0 && num % 2 === 0) {
      return false;
    }
    return isSpecial;
  }, true);
};

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // true
console.log(isSpecialArray([2, 7, 4, 8, 6, 1, 6, 3])); // false
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 4])); // false
