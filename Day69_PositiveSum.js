const positiveSum = (arr) => {
  // Method 1: Using loop🌀
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += arr[i];
    }
  }

  // Method 2: Using reduce Method➰
  const method2 = arr.reduce((acc, curr) => {
    return curr > 0 ? acc + curr : acc;
  }, 0);

  // Method 3: Using Filter and Reduce both Method⚪
  const filterReduce = arr
    .filter((num) => num > 0)
    .reduce((acc, curr) => acc + curr, 0);
  return { count, method2, filterReduce };
};

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0
