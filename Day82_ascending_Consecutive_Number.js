const ascending = (str) => {
  const n = str.length;

  // 🔍 Iterate through all possible lengths for the numbers
  for (let size = 1; size <= n / 2; size++) {
    let valid = true; // ✅ Assume the current length is valid
    let prevNum = parseInt(str.slice(0, size)); // 1️⃣ First number of the given size

    // 🔄 Iterate through the string with the given size
    for (let i = size; i < n; i += size) {
      let currentNum = parseInt(str.slice(i, i + size)); // 2️⃣ Next number of the same size

      if (currentNum !== prevNum + 1) {
        // 🚫 Check if current number is consecutive to the previous one
        valid = false; // ❌ If not, mark as invalid and break
        break;
      }
      prevNum = currentNum; // 🔄 Update previous number
    }

    if (valid) return true; // 🎉 If the current size is valid, return true
  }

  return false; // 🚫 If no valid size is found, return false
};

// 🧪 Test cases
console.log(ascending("232425")); // ➞ true ✅
console.log(ascending("2324256")); // ➞ false ❌
console.log(ascending("444445")); // ➞ true ✅
console.log(ascending("1234567")); // ➞ true ✅
