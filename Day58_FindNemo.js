function findNemo(sentence) {
  //  Method 1: Using Regex👇
  const match = sentence.match(/\bNemo\b/);
  const index = match
    ? sentence.slice(0, match.index).split(" ").length - 1
    : -1;
  console.log(index);
  console.log(
    match ? `🎉 I found Nemo at index ${index}!` : "😞 I can't find Nemo :("
  );
  // Method 2 through split() and indexOf() method👇
  //  📝 Split the sentence into an array of words
  const words = sentence.split(" ");

  // 🔍 Find the index of the word "Nemo" in the array
  const checkNemo = words.indexOf("Nemo");

  // ✅ Check if "Nemo" is found in the array
  return checkNemo !== -1
    ? `🎉 I found Nemo at index ${checkNemo}!`
    : "😞 I can't find Nemo :(";
}

console.log(findNemo("I am looking for Nemo")); // 🎉 I found Nemo at index 4!
findNemo("Nemo is hiding"); // 🎉 I found Nemo at index 0!
findNemo("Where is Nemo?"); // 🎉 I found Nemo at index 2!
findNemo("There is no fish here."); // 😞 I can't find Nemo :(
findNemo("Anemone contains Nemo"); // 🎉 I found Nemo at index 2!
