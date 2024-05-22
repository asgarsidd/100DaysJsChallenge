// Question: Flatten an Array of Arrays? 📋

let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

// Method 1: By Using reduce method 👇
const flattenArr = arr.reduce((prev, curr) => prev.concat(curr), []);
console.log(flattenArr); // Output: [ 0, 1, 2, 3, 4, 5 ]

// Method 2: Using flat() method 👇
const flatArr2 = arr.flat();
console.log(flatArr2); // Output: [ 0, 1, 2, 3, 4, 5 ]
