const sumArrays = (array1, array2) => {
    // Method 1: Using For-Loop➰
    const maxLength = Math.max(array1.length, array2.length);
    let arraySumIndex = [];
    for (let i = 0; i < maxLength; i++) {
      const value1 = array1[i] !== undefined ? array1[i] : 0;
      const value2 = array2[i] !== undefined ? array2[i] : 0;
      arraySumIndex.push(value1 + value2);
    }
    // Using Array.from Method🔣
    const methodMap = Array.from({ length: maxLength }, (_, i) => {
      const value1 = i < array1.length ? array1[i] : 0;
      const value2 = i < array2.length ? array2[i] : 0;
      return value1 + value2;
    });
    return { methodMap, arraySumIndex };
  };
  
  // Sample arrays
  const array1 = [1, 0, 2, 3, 4];
  const array2 = [3, 5, 6, 7, 8, 13];
  
  // Expected output: [4, 5, 8, 10, 12, 13]
  console.log(sumArrays(array1, array2)); // ➞ [4, 5, 8, 10, 12, 13]
  