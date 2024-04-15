const findMin = (arr) => {
    //through loop👇
  if (arr.length === 0) {
    return "Empty array";
  } else {
    let min = arr[0];
    for (let ele of arr) {
      if (ele < arr[0]) {
        min = ele;
      }
    }
    return min;
 }

 //through sort method👇
 arr = arr.sort((a,b) =>{
    if(b > a ) return-1;
     //return -1 means here swap the value
});
   return arr[0]

   //through Math.min👇
   if(arr.length === 0){
    return "Empty array"
   }
   return Math.min(...arr)
};

console.log(findMin([5, 10, 2, 8])); //output: 2
console.log(findMin([2, -3, 0, -7])); //output: -7
console.log(findMin([])); //Output: 'Empty array'
