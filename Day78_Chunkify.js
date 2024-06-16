const chunkify = (arr, size) => {
  // Method 1️⃣: Using For loop ➰
  const method1️ = [];
  for (let i = 0; i < arr.length; i += size) {
    method1️.push(arr.slice(i, i + size));
  }
  // Method 2️⃣: Using While Loop🌊
  let method2 = [];
  let i = 0;
  while (i < arr.length) {
    method2.push(arr.slice(i, i + size));
    i += size;
  }
  return { method1️, method2 };
};

console.log(chunkify([2, 3, 4, 5], 2)); //➞ [[2, 3], [4, 5]])
console.log(chunkify([2, 3, 4, 5, 6], 2)); // ➞ [[2, 3], [4, 5], [6]]
console.log(chunkify([2, 3, 4, 5, 6, 7], 3)); // ➞ [[2, 3, 4], [5, 6, 7]]
