const arr = [
  { title: "Iphone x", company: "Apple" },
  { title: "S22 Ultra", company: "Samsung" },
  { title: "Iphone 15", company: "Apple" },
  { title: "Moto 15", company: "Motorola" },
  { title: "Realme 2", company: "Realme" },
  { title: "K 10", company: "Oppo" },
  { title: "A71", company: "Samsung" },
  { title: "Iphone Xr", company: "Apple" },
];
function getUnique(arr) {
  let tempArr = arr.map((item) => {
    return item.company;
  });
  console.log([...new Set(tempArr)]);
  // Output:  'Apple', 'Samsung', 'Motorola', 'Realme', 'Oppo' ]
  console.log(tempArr);
  return [
    ...arr.reduce((acc, curr) => {
      acc.add(curr.company);
      return acc;
    }, new Set()),
  ];
}
console.log(getUnique(arr));
// [ 'Apple', 'Samsung', 'Motorola', 'Realme', 'Oppo' ]