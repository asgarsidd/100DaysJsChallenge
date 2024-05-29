/* 🏃‍♂️ Create a function that takes in an array of miles run every
Saturday and returns Johnny's total number of progress days. */
function progressDays(miles) {
  // 🟢 Step 1: Initialize progress count value
  let progressCount = 0;

  // 🔄 Step 2: Iterate through the array starting from index 1
  for (let i = 1; i < miles.length; i++) {
    // ⚖️ Step 3: Check if the current number is greater than the previous one
    if (miles[i] > miles[i - 1]) {
      // ➕ Step 4: Increase the progress count value
      progressCount++;
    }
  }

  // 🔙 Return the total count of progress days
  return progressCount;
}

// 📊 Test cases
console.log(progressDays([3, 4, 1, 2])); // ➞ 2
console.log(progressDays([10, 11, 12, 9, 10])); // ➞ 3
console.log(progressDays([6, 5, 4, 3, 2, 9])); // ➞ 1
console.log(progressDays([9, 9])); // ➞ 0
