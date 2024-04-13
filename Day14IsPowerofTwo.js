const isPowerofTwo = (num) => {
  for (let i = 1; i < num; i++) {
    // Through loop(easy)👇
    if (2 ** i === num) {
      return true;
    }
  }
  return false;
};

console.log(isPowerofTwo(8));
console.log(isPowerofTwo(0));

//Bitwise operator👇
const isPowerOfTwo = (x) => {
  return x != 0 && (x & (x - 1)) == 0;
};
console.log(isPowerOfTwo(8) ? true : false);
console.log(isPowerOfTwo(64) ? true : false);
