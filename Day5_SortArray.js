
// #Easy💦

const sortAccending = (arr) => {
  return arr.sort();
  //Sorts array elements as strings
};
const sort2ndArr = (arr) => {
  return arr.sort((a, b) => a - b);
  //Sorts array elements as numbers by subtracting each element from the next
};
console.log(sortAccending([5, 9, 1, 6, 2, 7])); // output: [ 1, 2, 5, 6, 7, 9 ]
console.log(sort2ndArr([5, 9, 1, 6, 2, 7, 10])); //For this Normal sort fn wont❌ be worked 
//  Output: [ 1, 2, 5, 6, 7, 9, 10 ]
