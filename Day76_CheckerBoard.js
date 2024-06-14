function checkerBoard(n, el1, el2) {
  // 🚫 Check if the elements are the same
  if (el1 === el2) {
    return "invalid";
  }

  // 🛠️ Initialize an empty array to hold the checkerboard
  const board = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      // 🔄 Determine which element to place based on the sum of the row and column indices
      if ((i + j) % 2 === 0) {
        row.push(el1); // ➕ Add el1
      } else {
        row.push(el2); // ➕ Add el2
      }
    }
    board.push(row); // ➕ Add row to the board
  }

  return board; // 📤 Return the checkerboard
}

// 🧪 Testing the function
console.log(checkerBoard(2, 7, 6)); // ➞ [[7, 6], [6, 7]]
console.log(checkerBoard(3, "A", "B")); // ➞ [["A", "B", "A"], ["B", "A", "B"], ["A", "B", "A"]]
console.log(checkerBoard(4, "c", "d")); // ➞ [["c", "d", "c", "d"], ["d", "c", "d", "c"], ["c", "d", "c", "d"], ["d", "c", "d", "c"]]
console.log(checkerBoard(4, "c", "c")); // ➞ "invalid"
