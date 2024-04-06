const findMax = (arr) => {
  let max = arr[0];
  //Using For Loop👇
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  //Using forEach👇
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  //   Through spread operator convert it to number
  //   and then we use Math.max function
  return Math.max(...arr); // 👈
  return max;
};
console.log(findMax([3, 6, 1, -9, 5])); //Output: 6
console.log(findMax([7, 6, 2, -9, 0, 1, 8, 3])); //Output: 8
console.log(findMax([-9, -4, -1, -7, 0, 5])); //Output: 5
