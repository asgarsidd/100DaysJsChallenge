const findMode = (arr) => {
  // Find mode in Array👇
  // Mode = Maximum Occurance value
  // Example: [5, 2, 2, 5, 3, 4, 5] maximum repetative No in array = 5
  let counts = {};
  let maxNum = 0;
  let mode;
  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxNum) {
      maxNum = counts[element];
      mode = element;
    }
  }
  return mode;
};

console.log(findMode([1, 2, 2, 3, 1, 4, 2])); //output = 2;
console.log(findMode([5, 2, 2, 5, 3, 4, 5])); //output = 5;
