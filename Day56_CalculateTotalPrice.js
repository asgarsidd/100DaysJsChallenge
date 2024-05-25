function getTotalPrice(groceries) {
  // Calculating Cart Total value using reduce👇
  return groceries.reduce((totalPrice, product) => {
    return totalPrice + product.quantity * product.price;
  }, 0);
}

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);
// >>> output: 4
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);
// >>> output: 10.4
