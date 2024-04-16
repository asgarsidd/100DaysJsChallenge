const toCamelCase = (str) => {
  str = str.trim().split(" ");
  str = str.map((currEle, index) => {
    if (index === 0) {
      return currEle[index] + currEle.slice(1).toLowerCase();
    } else {
      return currEle.charAt(0).toUpperCase() + currEle.slice(1).toLowerCase();
    }
  });
  return str.join("");
};

console.log(toCamelCase("hello coder whatsUp!!")); //Output: 'helloCoderWhatsup!!'
console.log(toCamelCase("hElLo coDer whAtsUp!!")); //Output: 'helloCoderWhatsup!!'

// const toCamelCase2 = (str) => {
//   str = str.trim();
//   console.log(str);

//   let finalStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//       finalStr += toUpperCase(str[i]);
//     } else if (str[i] === " ") {
//       finalStr += toUpperCase(str[i + 1]);
//       i++;
//     } else {
//       finalStr += str[i];
//     }
//   }

//   return finalStr;
// };

// const toUpperCase = (smallChar) => {
//   let smallAlp = "abcdefghijklmnopqrstuvwxyz";
//   let capsAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   return capsAlp.split("")?.[smallAlp.indexOf(smallChar)];
// };
