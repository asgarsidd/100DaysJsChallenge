function subarraySum(nums, input) {
  let count = 0; // 🧮 Counter for subarrays
  let sum = 0; // 💰 Running sum
  const sumMap = new Map(); // 🗺️ Map to store sum frequency
  sumMap.set(0, 1); // 🏁 Initialize map with sum 0 occurring once

  for (let num of nums) {
    sum += num; // 🧺 Add current number to running sum

    if (sumMap.has(sum - input)) {
      count += sumMap.get(sum - input); // 🎯 Found a subarray with sum input
    }

    // 📊 Update sum frequency in map
    if (sumMap.has(sum)) {
      sumMap.set(sum, sumMap.get(sum) + 1);
    } else {
      sumMap.set(sum, 1);
    }
  }

  return count; // 🏆 Return total count of subarrays
}

// 🧪 Test cases
console.log(subarraySum([1, 1, 1], 2)); // 🖨️ Output: 2

console.log(subarraySum([1, 2, 3], 3)); // 🖨️ Output: 2
