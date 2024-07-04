function longestIncreasingSubsequence(arr) {
  // 🗺️ Initialize the list of subsequences for each element
  const lis = arr.map((x, i) => [x]);

  // 🚀 Iterate through the array to build the subsequences
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      // 🔍 Check if we can extend the subsequence ending at arr[j] with arr[i]
      if (arr[i] > arr[j] && lis[i].length < lis[j].length + 1) {
        // ➕ Append arr[i] to the subsequence ending at arr[j]
        lis[i] = [...lis[j], arr[i]];
      }
    }
  }

  // 🏆 Find and return the longest increasing subsequence
  return lis.reduce((a, b) => (a.length > b.length ? a : b));
}

// 🔢 Test function with a sample array
const sampleArray = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(sampleArray)); // Output: [10, 22, 33, 50, 60, 80]
