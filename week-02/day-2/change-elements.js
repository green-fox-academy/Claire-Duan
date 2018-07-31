'use strict';

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`

// - Change the 8 to 4 with the `.map` method

// - Print the fourth element as a test
const s = [1, 2, 3, 8, 5, 6];

const newS = s.map(element => {
  if(element === 8) {
    element = 4;
  }
  return element;
})

console.log(newS);
