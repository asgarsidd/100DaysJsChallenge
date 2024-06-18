const findNestedArray = (arr) => {
  // Method 1️⃣: Using for Loop ➰
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // 📦 Check if the current element is an array
    if (Array.isArray(arr[i])) {
      count++;
    }
  }

  // Method 2️⃣: Using filter Method 🔍
  const method2 = arr.filter((n) => Array.isArray(n)).length;

  // 🔢 Return the count of nested arrays from both methods
  return { method1: count, method2 };
};

// 🧪 Test the function with sample inputs
console.log(findNestedArray([1, 2, [3, 2], 4, [6, 5]])); // ➞ { method1: 2, method2: 2 }
console.log(findNestedArray([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]])); // ➞ { method1: 3, method2: 3 }
