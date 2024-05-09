const rates = {
  // 💰 currency rate based on USD
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  INR: 82,
};

const cuurencyConverter = (convertingAmount, fromCurrency, toCurrency) => {
  // 💱 Currency Converter fromCurrency(convertingAmount) >>> toCurrency
  let AmountUSD = 0;
  if (fromCurrency !== "USD") {
    AmountUSD = convertingAmount / rates[fromCurrency];
  } else {
    AmountUSD = convertingAmount;
  }

  let convertedAmount = 0;
  if (toCurrency !== "USD") {
    convertedAmount = AmountUSD * rates[toCurrency];
  } else {
    convertedAmount = AmountUSD;
  }
  return convertedAmount;
};
console.log(cuurencyConverter(100, "GBP", "EUR")); //Output: 112.5
