'use strict';

const lineCount = 8;

// Write a program that draws a

// triangle like this:

//

// *

// **

// ***

// ****

//

// The triangle should have as many lines as lineCount is

for(let i=0; i<lineCount; i++) {
  let j=0;
  let t="*";
  while(j<i) {
    t = t + "*";
    j++;
  }
  console.log(t);
}
