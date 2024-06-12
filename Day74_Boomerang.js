const countBoomerangs = (arr) => {
  // Method 1: Using For Loops 🌀
  let boomerangCount = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      boomerangCount++;
    }
  }

  // Method 2: Using Reduce ㊗️
  const method2 = arr.reduce((count, _, i) => {
    // count: accumulator, _: current (ignored), i: index
    if (i < arr.length - 2 && arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      count++;
    }
    return count;
  }, 0);

  return { boomerangCount, method2 };
};

// Testing the function
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])); // 3 boomerangs: [3, 7, 3], [1, 5, 1], [2, -2, 2]
console.log(countBoomerangs([1, 2, 1, 2, 1, 2, 1])); // 4 boomerangs: [1, 2, 1], [2, 1, 2], [1, 2, 1], [2, 1, 2]
console.log(countBoomerangs([1, 2, 3, 4, 5])); // 0 boomerangs
console.log(countBoomerangs([5, 5, 5])); // 0 boomerangs
console.log(countBoomerangs([3, 1, 3, 3, 2, 3])); // 2 boomerangs: [3, 1, 3], [3, 2, 3]
