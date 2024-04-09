const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //By Through looping (easy way)💦
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
  /*  🚀 Here's a short and elegant way to compare arrays without using a loop!
   ✨ The every() method in JavaScript helps us to do the comparison process.
    With concise code like this, coding becomes both efficient and fun! 🌟
  */
  return arr1.every((curVal, index) => curVal === arr2[index]);
};

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); //Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); //Output: false
console.log(arraysAreEqual([], [])); //Output: true
