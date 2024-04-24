//* Calculate Factorial Using Recursion

// Recursion: is a programming technique where a fuction calls itself in order to solve a problem.

const factorial = (num) => {
  // Base case: The base case where the condition of recursion that stops the recursion.Without of base case its called indefinetely.

  if (num === 1) {
    return 1;
  }
  // Recursion Case: The condition in a recursion function that determines when the function should call itself again.

  return num * factorial(num - 1);

  // Optional :

  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
};
console.log(factorial(5)); // Output : 120
console.log(factorial(6)); // Output : 720
