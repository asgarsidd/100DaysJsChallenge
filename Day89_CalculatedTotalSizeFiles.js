function calculateTotalSize(fileSystem) {
  let totalSize = 0; // 🌟 Initialize totalSize to 0

  function traverse(node) {
    // 🕵️‍♂️ Define a recursive function to traverse the file system
    if (node.type === "file") {
      // 📄 Check if the node is a file
      totalSize += node.size; // ➕ Add the file size to totalSize
    } else if (node.type === "directory") {
      // 📁 Check if the node is a directory
      for (const child of node.children) {
        // 🔄 Loop through the children of the directory
        traverse(child); // 🧭 Recursively traverse each child
      }
    }
  }

  traverse(fileSystem); // 🚀 Start traversing from the root of the file system
  return totalSize; // 🏁 Return the total size
}
//Objects folder-->
const fileSystem = {
  // 🗂 Define the file system structure
  name: "root",
  type: "directory",
  children: [
    {
      name: "file1.txt",
      type: "file",
      size: 100, // 💾 Size of file1.txt
    },
    {
      name: "file2.txt",
      type: "file",
      size: 200, // 💾 Size of file2.txt
    },
    {
      name: "subdir",
      type: "directory",
      children: [
        {
          name: "file3.txt",
          type: "file",
          size: 300, // 💾 Size of file3.txt
        },
        {
          name: "subsubdir",
          type: "directory",
          children: [
            {
              name: "file4.txt",
              type: "file",
              size: 400, // 💾 Size of file4.txt
            },
          ],
        },
      ],
    },
  ],
};

console.log(calculateTotalSize(fileSystem)); // 📊 Output the total size: 1000
