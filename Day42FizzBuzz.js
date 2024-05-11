const fizzBuzz = (startNum, endNum) => {
  /* 
      -- For each number in range from startNum to endNum (both inclusive):
      1️⃣ If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
      2️⃣ If i is divisible by only 3, include "Fizz" in the result.
      3️⃣ If i is divisible by only 5, include "Buzz" in the result.
      4️⃣ Otherwise, include the number i itself.
    */

  let arr = [];
  for (let i = startNum; i <= endNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

console.log(fizzBuzz(1, 15));
// Output 🎉👇
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
console.log(fizzBuzz(14, 20));
// Output ✨👉 [ 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz' ]
