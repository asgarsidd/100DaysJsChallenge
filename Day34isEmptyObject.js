const isEmptyObject = (obj) => {
    // Check if object is empty using different methods👇
    // Method 1: Using hasOwnProperty to check each property
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return "🟢 It's not empty!";
        }
    }
    
    // Method 2: Using Object.keys() to get an array of keys and check its length
    return Object.keys(obj).length === 0 ? "🔴 It's empty" : "🟢 It's not empty";
};

console.log(isEmptyObject({ name: "Asgar" }));      // Output: "🟢 It's not empty!"
console.log(isEmptyObject({}));                      // Output: "🔴 It's empty"
console.log(isEmptyObject({ name: undefined }));     // Output: "🟢 It's not empty!"
console.log(isEmptyObject({ name: null }));          // Output: "🟢 It's not empty!"


