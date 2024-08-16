/**
 * ? Day99- How to write and add method using javascript currying concept?
 * !  - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * TODO:- DAY99 of 100DaysOfCode ----------------------------
 */

/* Currying is a technique of evaluating a function with multiple arguments
 into a sequence of functions with single/multiple arguments.
*/

function add(x) {
  let sum = x;

  function resultFn(y) {
    sum += y;
    return resultFn;
  }
  // Override the 'valueOf' method to return the final sum when evaluated.
  resultFn.valueOf = function () {
    return sum; //and here return the current value of 'sum'
  };
  return resultFn;
}

console.log(add(2)(3).valueOf()); //output: 5
