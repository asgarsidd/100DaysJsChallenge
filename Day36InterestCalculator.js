const calculateSimpleInterest = (principle, interestRate, timeYears) => {
  /* 💰 Simple Interest (S.I) is the method of calculating the interest amount
    for some principal amount of money */
  const simpleInterest = (principle * interestRate * timeYears) / 100;
  console.log("💰 Simple Interest:", simpleInterest); // Output : [ '💰 Simple Interest:', 150 ]
  const amountPay = principle + simpleInterest;
  console.log("💳 Amount to Pay:", amountPay); // Output: [ '💳 Amount to Pay:', 1150 ]
};
calculateSimpleInterest(1000, 5, 3);
