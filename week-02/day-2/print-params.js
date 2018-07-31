'use strict';

// - Create a function called `printParams`

//   which logs to the console the input parameters

//   (can have multiple number of arguments)
const printParams = function() {
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
};

printParams('I', 'am', 'Claire', 26);
