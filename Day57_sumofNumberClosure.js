/* 
✨ Write a function that returns an anonymous function, which adds n to its input.
🚀 We are going to learn about closures in this example.
🔍 Definition: A closure is a feature where an inner function has access to the 
   outer (enclosing) function's variables.
*/

const addNum = (n) => {
  // 🌟 This is the outer function
  return function (y) {
    // 🔐 This is the inner function having access to the outer function's variable 'n'
    return y + n;
  };
};

// 🧩 Example usage:
const setInit = addNum(1); // 'n' is set to 1
console.log(setInit(3)); // ➕ (3 + 1) = 4
console.log(setInit(4)); // ➕ (4 + 1) = 5

const setInit5 = addNum(5); // 'n' is set to 5
console.log(setInit5(5)); // ➕ (5 + 5) = 10
