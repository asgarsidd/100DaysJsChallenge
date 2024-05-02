const removeDuplicates = (arr) => {
  const removedArr = new Set(arr);
  console.log(removedArr);
  // convert to array using Array.from() 👇
  const convertArray = Array.from(removedArr);
  console.log(convertArray); // Opt : [ 1, 3, 2, 4, 5, 9, 6.8, 7, 8, 6 ]

  //using Spread operator👇
  const spreadConvert = [...removedArr];
  console.log(spreadConvert); // Opt : [ 1, 3, 2, 4, 5, 9, 6.8, 7, 8, 6 ]

  //Using forEach() method👇
  let forEachConvert = [];
  removedArr.forEach((ele) => forEachConvert.push(ele));
  console.log(forEachConvert); // Opt : [ 1, 3, 2, 4, 5, 9, 6.8, 7, 8, 6 ]

  // ONE Line Code👇
  console.log([...new Set(arr)]); // Opt : [ 1, 3, 2, 4, 5, 9, 6.8, 7, 8, 6 ]
};

console.log(removeDuplicates([1, 3, 2, 4, 5, 2, 9, 3, 6.8, 7, 8, 3, 6]));
