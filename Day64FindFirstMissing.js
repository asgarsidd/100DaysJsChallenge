const findMissingNum = (arr) => {
  //Find First missing in Array
  for (var i = 0; i < arr.length - 1; i++) {
    //check if first number + 1 is not equal to 2nd number
    if (arr[i] + 1 != arr[i + 1]) {
      // then return first number + 1
      return arr[i] + 1;
    }
  }

  return false;
};
console.log(findMissingNum(arr));
