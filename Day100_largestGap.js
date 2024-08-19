/**
 * ? Day100- Given an array of integers, return the largest gap between elements of the sorted version of that array.
 * !  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - -
 * TODO:- DAY100 of 100DaysOfCode In Javascript ----------------------------
 */

const largestGap = (arr) => {
  /**
   * ! Method 1: using For loop :-(
   */
  arr.sort((a, b) => a - b); // first we sort the array
  console.log(arr);
  let maxGap = 0;
  for (let i = 1; i < arr.length; i++) {
    let gap = arr[i] - arr[i - 1];
    if (gap > maxGap) {
      maxGap = gap;
    }
  }
  /**
   * ! Method 2: using Reduce :-(
   */
  const method2 = arr.slice(1).reduce((maxGap, current, index) => {
    const gap = current - arr[index];
    return gap > maxGap ? gap : maxGap;
  }, 0);

  return { maxGap, method2 };
};

console.log(largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5])); // ➞ 11
console.log(largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7])); // ➞ 4
console.log(largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9])); // ➞ 2
