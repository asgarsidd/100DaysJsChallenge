// Question checkTriangle Type🔻

const checkTringleType = (a,b,c)=>{
    if(a===b && b===c ) return "equilateral";
    if(a ===b || b===c || a===c) return "isosceles";
    if(a !==b && b !==c && a !==c) return "scalene"
};
console.log(checkTringleType(3,3,3));
console.log(checkTringleType(3,4,3));
console.log(checkTringleType(4,7,5));
/*   if all three sides are equal length, return "equilateral"
/*   if only two sides are equal length, return "isosceles"
/*   if all three sides are not equal length, return "scalene"
*/