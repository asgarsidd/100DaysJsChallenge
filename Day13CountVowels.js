const countVowels = (str) => {
  str = str.toLowerCase().split("");
  /* You try with forLoop if you want
   than behalf space of you can trim */

  // Using forEach👇
  let charVowel = 0;
  str.length > 0
    ? str.forEach((ele) => {
        ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u"
          ? charVowel++
          : 0;
      })
    : 0;
  //using reduce Method (best-practice)👇
  const vowels = str.reduce((count, curr) => {
    if (
      curr === "a" ||
      curr === "e" ||
      curr === "i" ||
      curr === "o" ||
      curr === "u"
    )
      count++;
    return count;
  }, 0); //Here its mendatory for this initial value;
  return vowels;
};
console.log(countVowels("Hello coders"));
console.log(countVowels(""));
console.log(countVowels("Do Something New ::"));
