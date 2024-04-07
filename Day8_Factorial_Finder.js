// Through Looping👇
const factorial = (num) => {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
// Through recursion👇
const factorialRecursive = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
};

console.log(factorial(5)); //Output: 120
console.log(factorialRecursive(4)); //24
