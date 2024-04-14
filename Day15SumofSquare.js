const sumOfSquares = (arr) => {
  // through reduce👇
  const sum = arr.reduce((acc, curr) => {
    return (acc = acc + curr * curr);
  }, 0);
  return sum;
  // through For Of loop👇
  let sum2 = 0;
  for (let ele of arr) {
    sum2 += ele ** 2;
  }
  return sum2;
};

console.log(sumOfSquares([1, 2, 3])); //output: 14
console.log(sumOfSquares([1, 6, 4, 0])); //output: 53
