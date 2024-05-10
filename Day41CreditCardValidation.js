const validateCreditCard = (str) => {
    // 💳 Credit Card Validation 

    //Initial step: Remove non-digit characters
    str = str.replace(/\D/g, ""); // Removed non-digit characters
    //step 1 : REVERSE Card Number
    let reverseNum = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverseNum = reverseNum + str[i];
    }
    console.log(reverseNum);
    //Step 2: Double Every Second Digit
    let doubleNum = reverseNum.split("").map((currDigit, index) => {
      if (index % 2 !== 0) {
        currDigit = currDigit * 2;
        // Step 3: Subtract 9 for double-digit results
        if (currDigit > 9) {
          currDigit = currDigit - 9;
        } else {
          currDigit = currDigit;
        }
      }
      return currDigit;
    });
    console.log(doubleNum);
    //Step 4: Sum all Digits:
    let sumAllDigit = doubleNum.reduce((accum, current) => {
      //Type Convert to Number for Adding otherwise it will concatenate string
      return accum + Number(current);
    }, 0);
    console.log(sumAllDigit);
    //step 5: if Modulo of 10 === 0 then it's valid else Not;
    return sumAllDigit % 10 === 0;
  };
  
  console.log(validateCreditCard("4539 1488 0343 6467")); //Output: true
  console.log(validateCreditCard("8273 1232 7352 0569")); //Output: false
  