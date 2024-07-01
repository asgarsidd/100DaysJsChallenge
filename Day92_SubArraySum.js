function subarraySum(nums, k) {
  let count = 0; // 🧮 Counter for subarrays
  let sum = 0; // 💰 Running sum
  const sumMap = new Map(); // 🗺️ Map to store sum frequencies
  sumMap.set(0, 1); // 🏁 Initialize map with sum 0 occurring once

  for (let num of nums) {
    sum += num; // 🧺 Add current number to running sum

    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k); // 🎯 Found a subarray with sum k
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
// Example 1
const nums1 = [1, 1, 1];
const k1 = 2;
console.log(subarraySum(nums1, k1)); // 🖨️ Output: 2

// Example 2
const nums2 = [1, 2, 3];
const k2 = 3;
console.log(subarraySum(nums2, k2)); // 🖨️ Output: 2
