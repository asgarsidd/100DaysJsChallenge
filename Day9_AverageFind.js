const averageFind = (arr) => {
  // Preferable way for Web Dev 💁
  const arr2 = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return arr2 / arr.length;
  // Through looping (naive) 👇
  let sum = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 1) {
      sum += arr[i];
    } else return arr[i];
  }
  return sum / arr.length;
};

console.log(averageFind([4, 2, 5, 1])); //Output:3
console.log(averageFind([5, 10, 2, 8])); //Output:6.25
console.log(averageFind([4])); //Output:4
