'use strict';

const lineCount = 8;

// Write a program that draws a

// diamond like this:

//    *

//   ***

//  *****

// *******

//  *****

//   ***

//    *

// The diamond should have as many lines as lineCount is
let upperLine;
if(lineCount%2===0) {
  upperLine = lineCount/2;
}
else {
  upperLine = (lineCount+1)/2;
}
let lowerLine = lineCount - upperLine;

for(let i=1; i<upperLine+1; i++) {
  let pre = " ";
  for(let j=0; j<upperLine-i; j++) {
    pre += " ";
  }

  let cont = "";
  for(let j=0; j<(2*i-1); j++) {
    cont += "*";
  }

  let post = " ";
  for(let j=0; j<upperLine-i; j++) {
    post += " ";
  }

  console.log(pre + cont + post);
}

for(let i=lowerLine; i>0; i--) {
  let pre ="  ";
  if(lineCount%2===0) {

    pre = " ";
  }
  for(let j=0; j<lowerLine-i; j++) {
    pre += " ";
  }

  let cont = "";
  for(let j=0; j<(2*i-1); j++) {
    cont += "*";
  }

  let post = " ";
  for(let j=0; j<lowerLine-i; j++) {
    post += " ";
  }

  console.log(pre + cont + post);
}
