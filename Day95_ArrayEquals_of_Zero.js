function ArrayOfZeroes(N, arr) {
  for (let i = 0; i < N - 1; i++) {
    // If current element is odd
    if (arr[i] % 2 !== 0) {
      // Decrement both arr[i] and arr[i+1]
      arr[i]--;
      arr[i + 1]--;
    }
  }

  // Check if the last element is zero
  if (arr[N - 1] % 2 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}

// Test cases:
console.log(ArrayOfZeroes(5, [2, 3, 4, 3, 2])); // Expected output: YES
console.log(ArrayOfZeroes(3, [1, 1, 1])); // Expected output: NO
console.log(ArrayOfZeroes(6, [4, 4, 4, 4, 4, 4])); // Expected output: YES
console.log(ArrayOfZeroes(1, [3])); // Expected output: NO
console.log(ArrayOfZeroes(2, [2, 2])); // Expected output: YES
console.log(ArrayOfZeroes(4, [3, 3, 3, 3])); // Expected output: YES
