  //* first way-->
  const hashTagGenerate = (str) => {
  const newArr = str.split(" ");
  const CapitalizeWord = newArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  console.log(CapitalizeWord);
  const concateStr = "#" + CapitalizeWord.join("");
  return concateStr;
};
// Second Way --->
const hashTagGenerate2 = (str) =>{
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }
    str = str.split(' ')
    str = str.map((word)=> word.replace(word[0], word[0].toUpperCase()));
    str = `#${str.join("")}`;
    return str;
}
console.log(hashTagGenerate("the way you think it decides your path"));
console.log(hashTagGenerate2("my mental issue this day"));