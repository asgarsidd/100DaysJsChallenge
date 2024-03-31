const findLongest=(str)=> {
    if(str.trim().length === 0){
        return false;
    }
    wordsArr = str.split(" ");
    // 1st way to Solve ----->
    // console.log(wordsArr);
    // wordsArrr = wordsArr.sort((a,b)=> a.length-b.length);
    //  console.log(wordsArrr);
    //  return wordsArrr.at(-1);
    //2nd way to solve ------>
    return wordsArr.reduce((acc,curr)=>
         (curr.length > acc.length ? curr : acc),""
    )
    console.log(wordsArr); ;
}

const str = "javascript school city building newspaper salmankhanjscode";
console.log(findLongest(str));
