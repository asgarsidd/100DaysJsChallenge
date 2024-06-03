const findCommonElements = (arr1, arr2) => {
  const commonElements = [];
  let i = 0;
  let j = 0;

  // Using two pointers to traverse both arrays👇
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      // If both elements are equal, add to the result and move both pointers
      commonElements.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      // If the element in arr1 is smaller, move the pointer in arr1
      i++;
    } else {
      // If the element in arr2 is smaller, move the pointer in arr2
      j++;
    }
  }
  // Using set Method 🗝️
  const set1 = new Set(arr1); // Create a set from the first array
  const result = [];

  for (const num of arr2) {
    if (set1.has(num)) {
      // Check if the set contains the current element of arr2
      result.push(num);
      set1.delete(num); // Remove the element from the set to handle duplicates
    }
  }

  return result;

  return commonElements;
};

console.log(findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // Output: [3, 4, 5]
console.log(findCommonElements([3], [3, 4, 5])); // Output: [3]
console.log(findCommonElements([1, 3, 4, 6], [2, 3, 4, 5, 6])); // Output: [3, 4, 6]
console.log(findCommonElements([1, 2, 3, 5, 7], [3, 5, 6, 7, 8])); // Output: [3, 5, 7]
