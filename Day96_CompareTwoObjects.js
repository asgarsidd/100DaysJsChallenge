// 🔍 Write a JavaScript program to compare two objects
// 🧐 to determine if the first one contains the same properties
// 📊 as the second one (which may also have additional  properties)

const objA = { a: 1, b: 2, c: 1 };   // 📦 Object A
const objB = { a: 1, b: 1, c: 3 };   // 📦 Object B
const objC = { a: 1, b: 1, c: 1, d: 1 }; // 📦 Object C
const objD = { a: 1, b: 1 }; // 📦 Object D (missing 'c' key)

const objectsEqual = (a, b) => {
  console.log(Object.keys(a)); // 🖨️ Log keys of object 'a'
  // ✅ Check if every key in 'a' exists in 'b'
  return Object.keys(a).every((key) => b[key]);
};

console.log(objectsEqual(objA, objB)); // 🖨️ true
console.log(objectsEqual(objA, objC)); // 🖨️ true
console.log(objectsEqual(objA, objD)); // 🖨️ false