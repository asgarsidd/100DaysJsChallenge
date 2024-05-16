const isValidDate = (dateFormat) => {
  /* Date Validation:📅👇
          1. Check if it is a valid date in the format MM/DD/YYYY.
          2. Valid Date range should be from January 1, 1900, to December 31, 2099.
    */
  return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(
    dateFormat
  );
};

console.log(isValidDate("12/15/2021")); //? output: true
console.log(isValidDate("02/31/2021")); //? output: true
console.log(isValidDate("04/35/2020")); //? output: false
console.log(isValidDate("01/01/1800")); //? output: false
console.log(isValidDate("12/31/2099")); //? output: true
