const findOutlier = (arr) => {
    // 🧮 Split the array into even and odd arrays
    const evenArray = arr.filter((ele) => ele % 2 === 0); // 🔵 Even numbers
    const oddArray = arr.filter((ele) => ele % 2 !== 0); // 🔴 Odd numbers
    
    // 🤔 Determine which array has the outlier
    return evenArray.length === 1 ? evenArray[0] : oddArray[0];
  };
  
  // 🧪 Testing the function
  console.log(findOutlier([0, 1, 2])); // ➞ 1 🔴
  console.log(findOutlier([1, 2, 3])); // ➞ 2 🔵
  console.log(findOutlier([1, 1, 0, 1, 1])); // ➞ 0 🔵
  console.log(findOutlier([0, 0, 3, 0, 0])); // ➞ 3 🔴
  console.log(findOutlier([160, 3, 1719, 19, 13, -21])); // ➞ 160 🔵
  console.log(findOutlier([4, 0, 100, 4, 11, 2602, 36])); // ➞ 11 🔴
  