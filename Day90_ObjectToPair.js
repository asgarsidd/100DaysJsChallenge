function objectToPairsUsingEntries(obj) {
    // 🔄 Using Object.entries() 🌟
    const method1 = Object.entries(obj);
  
    // Using For-in loop ➰ 🔍
    const method2 = []; // 🗂 Initialize an empty array to store the pairs
    for (const key in obj) { // 🔑 Loop through each key in the object
      if (obj.hasOwnProperty(key)) { // 🔒 Check if the key is an own property of the object
        method2.push([key, obj[key]]); // ➕ Add the [key, value] pair to the array
      }
    }
    return { method1, method2 }; // 🏁 Return the array of pairs
  }
  
  const sampleObject = { // 📁 Define a sample object
    a: 1,
    b: 2,
    c: 3,
  };
  
  console.log(objectToPairsUsingEntries(sampleObject)); // 🚀 Output: { method1: [['a', 1], ['b', 2], ['c', 3]], method2: [['a', 1], ['b', 2], ['c', 3]] }
  