// 🎉 Let's reverse an array using different methods! 🎉

let arr = [10, 20, 30, 40, 50];
let originalArr = [...arr]; // Make a copy of the original array

// 🚀 Method 1: Built-in reverse method
const reverseArr = (arr) => {
  return arr.reverse(); // Reverse the array in place
};

// 🔄 Method 2: Swapping an array in place using two pointers
const reverseArr2 = (arr) => {
  let start = 0; // Initialize the start pointer
  let end = arr.length - 1; // Initialize the end pointer

  // Loop until the start pointer is less than the end pointer
  while (start < end) {
    // 🔄 Swap elements at start and end
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++; // Move start pointer forward
    end--; // Move end pointer backward
  }

  return arr; // Return the reversed array
};

// 🌀 Method 3: For loop with extra space
const reverseArr3 = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]); // Add elements to the result array in reverse order
  }
  return result; // Return the new reversed array
};

// 🌟 Method 4: Using map and spread
const reverseArr4 = (arr) => {
  return arr.map(arr.pop, [...arr]); // Use map and spread to reverse the array
};

// 📊 Testing each method
console.log('🔄 Method 1:', reverseArr([...arr])); // Using a copy of the original array
console.log('🔄 Method 2:', reverseArr2([...originalArr])); // Using a copy of the original array
console.log('🔄 Method 3:', reverseArr3(arr)); // Method 3 doesn't mutate the array
console.log('🔄 Method 4:', reverseArr4(arr)); // Method 4 doesn't mutate the array
// Output🍀: [ 50, 40, 30, 20, 10 ]