'use strict';

const lineCount = 5;

// Write a program that draws a

// pyramid like this:

//    *

//   ***

//  *****

// *******

//

// The pyramid should have as many lines as lineCount is
for(let i=1; i<lineCount+1; i++) {
  let pre = " ";
  for(let j=0; j<lineCount-i; j++) {
    pre += " ";
  }

  let cont = "";
  for(let j=0; j<(2*i-1); j++) {
    cont += "*";
  }

  let post = " ";
  for(let j=0; j<lineCount-i; j++) {
    post += " ";
  }

  console.log(pre + cont + post);
}
