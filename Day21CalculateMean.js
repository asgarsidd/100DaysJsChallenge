const calculateMean = (arr) => {
  // Calculate mean::👇
  //  Mean =  Sum of Given Number / total Number
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum / arr.length;
};

console.log(calculateMean([5, 2, 4, 6, 2, 1])); //output: 3.33333
console.log(calculateMean([10, 20, 30])); //output: 20
console.log(calculateMean([-1, 0, 1])); //output: 0
console.log(calculateMean([23, 21])); //output: 22
console.log(calculateMean([])); //output: 0
