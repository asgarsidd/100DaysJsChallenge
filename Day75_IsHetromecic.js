function isHeteromecic(num) {
  /* 🧮 A pronic number, also known as a heteromecic number, is a number 
   that is the product of two consecutive integers, expressed as 𝑛(𝑛+1)
  n(n+1). */
  let n = 0;
  while (n * (n + 1) <= num) {
    if (n * (n + 1) === num) {
      return true; // ✅ If n * (n + 1) equals the number, it's pronic!
    }
    n++;
  }
  return false; // ❌ If no such n is found, it's not pronic.
}

// Testing the function
console.log(isHeteromecic(0)); // true ✅ 0 * 1 = 0
console.log(isHeteromecic(2)); // true ✅ 1 * 2 = 2
console.log(isHeteromecic(7)); // false ❌
console.log(isHeteromecic(110)); // true ✅ 10 * 11 = 110
console.log(isHeteromecic(136)); // false ❌
console.log(isHeteromecic(156)); // true ✅ 12 * 13 = 156
