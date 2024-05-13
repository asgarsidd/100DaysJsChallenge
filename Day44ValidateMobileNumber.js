const validateIndianMobNumber = (mobNum) => {
  /*  ----Validate🔎 INDIAN🇮🇳 Mobile Number📲----
   1️⃣ Length: An Indian Mobile Number should have 10 digits.
   2️⃣ Starting Digit: The Number must start with 6,7,8 or 9
      which are valid starting digits for Indian Mobile Number⏺️
*/
  return /^[6-9][\d]{9}$/.test(mobNum);
};

console.log(validateIndianMobNumber("7545957479")); // Output : true
console.log(validateIndianMobNumber("0124567839")); // Output : false
console.log(validateIndianMobNumber("894595747")); // Output : false
