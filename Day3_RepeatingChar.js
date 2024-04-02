/*    Constraints 🔽
  1. function should be case sensitive
  2. Handle both lower and UpperCase
  3. For all ASCII value 
*/
const countChar = (word,char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    word = word.split('').reduce((accum,currChar)=>{
        if(currChar === char){
            accum++; 
        }
        return accum;
    },0)  // initial value: 0
    return word;
}
console.log(countChar("MongoDbJsonExpressNodeNodemOn","O")); // Output: 6
