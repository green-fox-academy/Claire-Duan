'use strict';

const lineCount = 10;

// Write a program that draws a

// square like this:

// %%%%%

// %   %

// %   %

// %   %

// %   %

// %%%%%

// The square should have as many lines as lineCount is
let width = "%";
for(let i=0; i<lineCount-1; i++) {
  width += "%";
}
console.log(width);

for(let i=0; i<lineCount-2; i++) {
  let cont = "%";
  for(let j=0; j<lineCount-2; j++) {
    cont += " ";
  }
  cont += "%";
  console.log(cont);
}
console.log(width);
