function removeFalseValues6(input) {
  // 🧹 Cleaning object by removing falsy values
  let res = {};
  for (const [key, value] of Object.entries(input)) {
    if (value && typeof value !== "object") {
      // 🎯 Direct truthy values
      res = { ...res, [key]: value };
    } else if (Array.isArray(value)) {
      // 🧵 Array handling
      let newArr = value.filter((e) => e);
      res = { ...res, [key]: newArr };
    } else if (typeof value === "object" && value !== null) {
      // 🧊 Nested object handling
      let newObj = {};
      for (const [key2, value2] of Object.entries(value)) {
        if (value2) newObj = { ...newObj, [key2]: value2 };
      }
      res = { ...res, [key]: newObj };
    }
  }
  return res;
}

// 🧪 Test object
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: "",
  g: "a",
  h: [null, false, "", true, 1, "a"],
  i: { j: 0, k: false, l: "a" },
};

console.log(removeFalseValues6(obj)); // 🖨️ Expected Output: {"c":true, "e":1, "g":"a", "h":[true,1,"a"], "i":{"l":"a"}}
