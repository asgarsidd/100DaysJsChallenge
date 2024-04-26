const repeatString = (str, num) => {
  // With Normal forLoop::👇

  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;

  // Using repeat() method ::👇

  return num > 0 ? str.repeat(num) : str;
};
console.log(repeatString("Abc", 0)); //output : ''
console.log(repeatString("Abc", 1)); //output : 'Abc'
console.log(repeatString("Abc", 3)); //output : 'AbcAbcAbc'
