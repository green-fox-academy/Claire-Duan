'use strict';

// - Create a variable named `typo` and assign the value `Chinchill` to it

// - Write a function called `appendAFunc` that gets a string as an input,

//   appends an 'a' character to its end and returns with a string

// - Print the result of `appendAFunc(typo)` to the console

let typo = 'Chinchill';

// const appendAFunc = function(str = 'string') {
//   return str + 'a';
// }

const appendAFunc = str => str + 'a';

console.log(appendAFunc(typo));
