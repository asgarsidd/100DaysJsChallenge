const sumOfDigits = (str) => {
  
  let arr = Array.from(String(str), Number);
  console.log(arr);
  const sum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(sum);
  return sum;
};

console.log(sumOfDigits(1234)); //Output: 10
console.log(sumOfDigits(5434)); //Output: 16
console.log(sumOfDigits(120384)); //Output: 18
