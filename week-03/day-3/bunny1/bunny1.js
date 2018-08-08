'use strict';

function bunnyEar(num) {
  if (num === 1) {
    return 2;
  }
  return 2 + bunnyEar(num - 1);
}

console.log(bunnyEar(5));
