'use strict';

// - Create a function called `factorio`

//   that returns it's input's factorial

const factorio = function(num = 0) {
  let fac = 1;
  for(let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
}

console.log(factorio(4));
