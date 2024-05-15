const validateHexColor = (code) => {
  /* Validate Hex Color code👇
       1. Hex color code start "#"
       2. It should be followed by either 3 or 6 hexadecimal characters.
    */
  return /^#([A-Fa-f\d]{3}||[A-Fa-f\d]{6})$/.test(code);
};

console.log(validateHexColor("#a3c113")); //output: true
console.log(validateHexColor("#fff")); //output: true
console.log(validateHexColor("#1234567")); //output: false;
console.log(validateHexColor("d34cdf")); //output: false
console.log(validateHexColor("a3c113")); //output: false
