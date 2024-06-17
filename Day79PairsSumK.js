const pairSumofK = (arr, target) => {
  // Method 1️⃣: Using Nested Loops
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        resultArr.push([arr[i], arr[j]]);
      }
    }
  }

  // Method 2️⃣: Using HashMap
  let method2 = [];
  let numMap = new Map();

  for (let num of arr) {
    let complement = target - num;
    if (numMap.has(complement)) {
      method2.push([complement, num]);
    }
    numMap.set(num, true);
  }

  return { method1: resultArr, method2 };
};

console.log(pairSumofK([1, 2, 3, 4, 5], 6)); // ➞ { method1: [[1, 5], [2, 4]], method2: [[2, 4], [1, 5]] }
