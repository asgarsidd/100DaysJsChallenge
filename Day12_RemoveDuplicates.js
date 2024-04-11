const removeDuplicates = (arr) => {
  let newArr = new Set(arr);
  return newArr;
};

console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); //Output: [1,2,3,4]
console.log(removeDuplicates([1, 2, 3, 4, 5, 4])); //Output: [1,2,3,4,5]
console.log(removeDuplicates([])); //Output: []
