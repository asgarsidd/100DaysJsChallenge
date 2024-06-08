const disemvowel = (str) => {
  // Method 1: Using Loop 🌀
  let method1 = "";
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      method1 += str[i];
    }
  }

  // Method 2: Using replace with Regular Expression 🧙‍♂️
  const method2 = str.replace(/[aeiouAEIOU]/g, "");

  // Method 3: Using filter and split 🛠️
  const method3 = str
    .split("")
    .filter((char) => !"aeiouAEIOU".includes(char))
    .join("");

  return { method1, method2, method3 };
};

console.log(disemvowel("This website is for losers LOL!")); // 'Ths wbst s fr lsrs LL!'
