/**
 * Day97- How can we insert an element  a specific index in an Array?
*/
const insertAtIndex = (arr, index, value) => {
  // Method 1: using For loop :-(
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      newArr.push(value);
    }
   
    newArr.push(arr[i]);
  }
  // Method 2: Using Splice method :-(
   const newSplice = [...arr];
    newSplice.splice(2,0,3);
  return {newArr, newSplice};
};

console.log(insertAtIndex([1, 2, 4], 2, 3)); //{ newArr: [ 1, 2, 3, 4 ], newSplice: [ 1, 2, 3, 4 ] }
console.log(insertAtIndex([1, 2,6,9], 2, 3)); //{ newArr: [ 1, 2, 3, 6, 9 ], newSplice: [ 1, 2, 3, 6, 9 ] }