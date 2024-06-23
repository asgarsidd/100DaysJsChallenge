//Write a JavaScript function to find the difference between two arrays.
const difference = (array1, array2) => {
  // Flatten both arrays Using ES6 flat method ♭
  const flatArray1 = array1.flat(Infinity);
  const flatArray2 = array2.flat(Infinity);

  // Find elements in array1 that are not in array2
  const diff1 = flatArray1.filter((element) => !flatArray2.includes(element));

  // Find elements in array2 that are not in array1
  const diff2 = flatArray2.filter((element) => !flatArray1.includes(element));

  // Combine the two differences
  return [...new Set([...diff1, ...diff2])];
};

// Test Data
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ➞ [3, 100, 10]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
// ➞ [6]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ➞ [3, 100, 10]
