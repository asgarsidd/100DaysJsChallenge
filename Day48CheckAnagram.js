const areAnagrams = (str1, str2) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

    // Sort the characters of both strings
    const sortedStr1 = cleanStr1.split("").sort().join("");
    const sortedStr2 = cleanStr2.split("").sort().join("");

    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2; // Returns true if the strings are anagrams, false otherwise 🎉❌
}

console.log(areAnagrams("list@en", "silent")); // Output: true 🎉
console.log(areAnagrams("hello", "world")); // Output: false ❌
console.log(areAnagrams("deb-it card", "bad cre@dit")); // Output: true 🎉
console.log(areAnagrams("restful", "fluster")); // Output: true 🎉
