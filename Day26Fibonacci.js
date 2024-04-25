const fibonacciNth = (num) => {
  //we find the value of nth fibonacci👇
  if (num <= 2) {
    return 1;
  } else {
    return fibonacciNth(num - 1) + fibonacciNth(num - 2);
  }
};

console.log(fibonacciNth(5)); //output: 5
console.log(fibonacciNth(4)); //output: 3
console.log(fibonacciNth(1)); //output: 1
console.log(fibonacciNth(3)); //output: 2
console.log(fibonacciNth(2)); //output: 1
