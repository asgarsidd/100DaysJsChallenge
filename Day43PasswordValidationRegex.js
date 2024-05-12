function passwordValidationRegex(password) {
  //Password validation through REGEX 👇
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

console.log(passwordValidationRegex("Pass123!")); // Output: true (Meets all criteria: uppercase, lowercase, digit, special character, and length)
console.log(passwordValidationRegex("password")); // Output: false (Missing uppercase, digit, special character, and too short)
console.log(passwordValidationRegex("1234567")); // Output: false (Missing uppercase, lowercase, special character, and too short)
console.log(passwordValidationRegex("Pass@123")); // Output: true (Meets all criteria: uppercase, lowercase, digit, special character, and length)
