const numberRangeGenerators = (startNum, endNum, numberNew = []) => {
  // Through recursion ::👇

  if (startNum > endNum) {
    return [];
  } else {
    return [startNum].concat(numberRangeGenerators(startNum + 1, endNum));
  }
  // Through While loop::👇

  while (startNum <= endNum) {
    numberNew.push(startNum);
    startNum++;
  }
  return numberNew;
};

console.log(numberRangeGenerators(0, 5)); //Output : [0,1,2,3,4,5]
console.log(numberRangeGenerators(-1, 5)); //Output : [-1,0,1,2,3,4,5]
console.log(numberRangeGenerators(-2, 2)); //Output : [-2,-1,0,1,2]
