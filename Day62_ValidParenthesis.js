const isValid = (s) => {
  // 🟢 Create an empty array to use as a stack
  const stack = [];
  let i = 0;
  // 💡 Define valid parenthesis combinations
  const parens = "() {} []";

  // 🔄 Loop through each character in the string
  while (i < s.length) {
    // ➕ Push current character onto the stack
    stack.push(s[i]);
    i++;
    // Get the last two characters from the stack
    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    // 🔍 Check if the last two characters form a valid pair
    let checkParens = open + closed;
    if (parens.includes(checkParens)) {
      // ✅ If they form a valid pair, remove them from the stack
      stack.pop();
      stack.pop();
    }
  }
  // 🔙 Return true if stack is empty (all pairs matched)
  return stack.length === 0;
};

// 📊 Test cases
console.log(isValid("{}()[]")); // Output: true
console.log(isValid("{}()}")); // Output: false
console.log(isValid("{}({})")); // Output: true
