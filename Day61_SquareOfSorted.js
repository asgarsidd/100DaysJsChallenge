const squareOfSorted = (arr) => {
  // 🟢 Method 1: One-liner Code👇
  // 🎯 Use map to square each item and sort the result
  console.log(arr.map((item) => item * item).sort((a, b) => a - b));

  // 🟡 Method 2: Using for loop with Math.pow()**
  // 🔄 Create a new array to store squared values
  const newArr = new Array(arr.length).fill(0);

  // 🔢 Iterate through the original array
  for (let i = 0; i < arr.length; i++) {
    // 💪 Square each item using Math.pow and store it in newArr
    newArr[i] = Math.pow(arr[i], 2);
  }

  // 📊 Sort the squared values in ascending order
  return newArr.sort((a, b) => a - b);
};

// 📊 Test cases
console.log(squareOfSorted([0, 3, 7, 8])); // Output: [0, 9, 49, 64]
console.log(squareOfSorted([-6, -1, 5])); // Output: [1, 25, 36]
