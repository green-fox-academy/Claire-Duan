'use strict';

const lineCount = 6;

// Write a program that draws a

// square like this:

// %%%%%

// %%  %

// % % %

// %  %%

// %   %

// %%%%%

// The square should have as many lines as lineCount is
let width = "%";
for(let i=0; i<lineCount-1; i++) {
  width += "%";
}
console.log(width);

let n = 0;
for(let i=0; i<lineCount-2; i++) {
  let cont = "%";
  for(let j=0; j<n; j++) {
    cont += " ";
  }
  cont += "%";

  for(let j=1; j<lineCount-2-n; j++) {
    cont += " ";
  }
  cont += "%"
  n++;
  console.log(cont);
}
console.log(width);
