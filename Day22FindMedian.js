/* step follow " Find Median🤔 " in Array:--
 1. sort the array to ascending order. 
 2. if the array has an odd number of elements,
the median is middle element. 

 3. if the array has an even number of elements, the median is the average of the 
the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6. 
*/
const findMedian = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let len = arr.length;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
};

console.log(findMedian([5, 3, 9, 1, 7])); //output: 5
console.log(findMedian([2, 4, 6, 8])); //output: 5
console.log(findMedian([1, 3, 5, 7, 9, 11])); //output: 6
console.log(findMedian([1, 2, 3, 4, 5])); //output: 3
