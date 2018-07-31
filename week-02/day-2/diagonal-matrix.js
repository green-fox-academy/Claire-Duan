'use strict';

// - Create (dynamically*) a two dimensional list

//   with the following matrix**. Use a loop!

//   0 0 0 1

//   0 0 1 0

//   0 1 0 0

//   1 0 0 0

// - Print this two dimensional list to the console

// * size should depend on a variable

// ** Relax, a matrix is just like an array
const matrixArr = [];

function matrixInit(num = 2) {
  for (let i = 0; i < num; i++) {
    matrixArr[i] = [];
    for (let j = 0; j < num; j++) {
      if (j === num - i - 1) {
        matrixArr[i][j] = 1;
      }
      else {
        matrixArr[i][j] = 0;
      }
    }
  }
}

// const printCells = (arr = []) => { console.log(arr.join(' ')); };
function printCells(arr = []) {
  let sum = '';
  arr.forEach(cell => sum += (' ' + cell));
  return sum;
}

matrixInit(4);
matrixArr.forEach(rows => console.log(printCells(rows)));
