function vendingMachine(products, money, productNumber) {
  // 🪙 List of available coins
  const coins = [500, 200, 100, 50, 20, 10];

  // 🚫 Check if the productNumber is valid
  if (productNumber < 0 || productNumber >= products.length) {
    return "🚫 Enter a valid product number";
  }

  // 🛒 Get the selected product and its price
  const selectedProduct = products[productNumber];
  const productPrice = selectedProduct.price;

  // 💸 Check if the user has enough money for the selected product
  if (money < productPrice) {
    return "💸 Not enough money for this product";
  }

  // 💰 Calculate the change
  let changeAmount = money - productPrice;
  const change = [];

  // 🪙 Determine the coins for the change
  for (const coin of coins) {
    while (changeAmount >= coin) {
      change.push(coin);
      changeAmount -= coin;
    }
  }

  return {
    product: selectedProduct.name,
    change: change,
  };
}

// 🛍️ Example products array
const products = [
  { name: "🥤 Soda", price: 150 },
  { name: "🍟 Chips", price: 200 },
  { name: "🍬 Candy", price: 100 },
  { name: "🍫 Chocolate", price: 250 },
  { name: "🍬 Gum", price: 50 },
  { name: "🧃 Juice", price: 300 },
  { name: "🍪 Crackers", price: 120 },
];

// 🔍 Test cases
console.log(vendingMachine(products, 200, 7)); // "🚫 Enter a valid product number"
console.log(vendingMachine(products, 500, 0)); // { product: "🥤 Soda", change: [ 200, 100, 50 ] }
console.log(vendingMachine(products, 90, 1)); // "💸 Not enough money for this product"
