/**      🔤✨ "Palindrome Alert! 🔍 
Did you know? Palindromes are words,phrases,
or numbers that read the same forwards and 
backwards! From 'level' to 'radar', they're
like magic! Let's celebratethe symmetry of language! **/

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  // (/\W/g,"") remove all non-word char from Strings.
  let reverStr = str.split("").reverse().join("");
  console.log(reverStr);
  return str === reverStr ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal")); //false
console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("hello")); //false
