const moveZeroes = (arr) => {
  // 📌 Step 1: Initialize counter to track the number of zeroes
  let countZero = 0;

  // 🔄 Step 2: Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // 🔍 Step 3: Check if the current element is zero
    if (arr[i] === 0) {
      // ✂️ Step 4: Remove the zero element from the array using splice
      arr.splice(i, 1);
      // 🔙 Step 5: Adjust the index to account for the removed element
      i--;
      // ➕ Step 6: Increment the zero count
      countZero++;
    }
  }

  // ➕ Step 7: Append zeroes to the end of the array based on countZero
  while (countZero > 0) {
    arr.push(0);
    countZero--;
  }

  // ✅ Return the modified array
  return arr;
};

// 📊 Test case
console.log(moveZeroes([0, 1, 2, 3, 4])); // Output: [1, 2, 3, 4, 0]
console.log(moveZeroes([0, 1, 0, 3, 12, 15])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1])); // Output: [1, 0, 0]
console.log(moveZeroes([0])); // Output: [0]
