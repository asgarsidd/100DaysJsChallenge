function findOccurance(arr) {
  // Using has and set👇
  // Initialize a new Map to store key-value pairs
  let map1 = new Map();
  for (let i = 0; i < arr.length; i++) {
    // Returns true if a key exists in a Map
    if (map1.has(arr[i])) {
      //Sets the value for a key in a Map
      map1.set(arr[i], map1.get(arr[i]) + 1);
    } else {
      // If the key doesn't exist, set its value to 1
      map1.set(arr[i], 1);
    }
  }
  return map1;
  //short method::👇
  let counts = {};
  for (let elements of arr) {
    counts[elements] = (counts[elements] || 0) + 1;
    // undefine || 0 = 0  +  1;
  }
  return counts;
}
const numbers = [1, 2, 2, 3, 1, 4, 2];
const resultArray = findOccurance(numbers);
console.log(resultArray); //Output: {1:2, 2:3, 3:1, 4:1}
