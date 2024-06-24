const primeNumCheck = (arr) => {
  // 🚀 Two ways to check if all numbers in an array are prime!
  // Method 1: Quick check using for...of loop
  // Method 2: Thorough check using every() and square root optimization
  // Which one do you prefer? 🤔 #JavaScript #Algorithms #CodingChallenge
  // Method 1: Using for...of Loop ➿
  for (num of arr) {
    if (num == 1 || (num > 2 && num % 2 == 0)) {
      return false;
    }
  }
  return true;

  // Method 2: Using every() method 🍂
  return arr.every((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

console.log(primeNumCheck([2, 3, 5, 7])); // true ✅
console.log(primeNumCheck([2, 3, 5, 8])); // false ❌
