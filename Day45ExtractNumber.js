const extractNumber = (str) => {
  //    Extract the number from String
  let regex = /\d+/g;
  return str.match(regex);
};

console.log(extractNumber("annb123defft456"));
// Output: [ '123', '456' ]
console.log(extractNumber("no numbers here"));
// Output: null
console.log(extractNumber("yehg235hlfg678"));
//Output: [ '235', '678' ]
console.log(extractNumber("yg7123de67ft456"));
//Output: [ '7123', '67', '456' ]
