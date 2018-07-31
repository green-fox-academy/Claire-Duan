'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter

// - The function should return the result

const sum = function(num = 0) {
  let sumResult = 0;
  for(let i = 0; i <=num; i++ ) {
    sumResult += i;
  }
  return sumResult;
}

console.log(sum());

