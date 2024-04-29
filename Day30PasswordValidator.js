const passwordValidator = (password) => {
/*
    ---? Criteria : Password⏳ Validating ?---

--1-- Password must contain at least one lowercase, oneUpperCase letter, and one digit.
--2-- Length of Password must be at least 8 characters.
--3-- function return true if the password meets all the criteria, otherwise, it should return false.

   <Note> Password will contain only alphanumeric character and punctuation marks. </Note>
*/

  let hasLowercase = false;
  let hasUpperCase = false;
  let hasNumeric = false;
  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUpperCase = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasLowercase = true;
    } else if (!isNaN(Number(char))) {
      hasNumeric = true;
    }
  }
  if (!hasLowercase || !hasUpperCase || !hasNumeric || password.length < 8) {
    return false;
  } else {
    return true;
  }
};

console.log(passwordValidator("name123")); //Output : false ::length is less than 8
console.log(passwordValidator("name123Freuit")); //Output : true
console.log(passwordValidator("name123tuiee")); //Output : false ::missing Upper
console.log(passwordValidator("AsgheigerR8")); //Output : true
console.log(passwordValidator("pieiruqyR5")); //Output : true
