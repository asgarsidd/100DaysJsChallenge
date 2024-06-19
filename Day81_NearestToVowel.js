const distanceToNearestVowel = (str) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const distances = new Array(str.length).fill(Infinity);

  // Method 1️⃣: Forward pass to find nearest vowel to the left or current position
  let lastVowelIndex = -Infinity;
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      lastVowelIndex = i;
    }
    distances[i] = Math.min(distances[i], Math.abs(i - lastVowelIndex));
  }

  // Method 2️⃣: Backward pass to find nearest vowel to the right position
  lastVowelIndex = Infinity;
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.has(str[i])) {
      lastVowelIndex = i;
    }
    distances[i] = Math.min(distances[i], Math.abs(i - lastVowelIndex));
  }

  return distances;
};

// 🧪 Test cases
console.log(distanceToNearestVowel("aaaaa")); // ➞ [0, 0, 0, 0, 0]
console.log(distanceToNearestVowel("babbb")); // ➞ [1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("abcdabcd")); // ➞ [0, 1, 2, 1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("shopper")); // ➞ [2, 1, 0, 1, 1, 0, 1]
