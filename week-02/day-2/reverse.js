'use strict';

// - Create a variable named `aj`

//   with the following content: `[3, 4, 5, 6, 7]`

// - Reverse the order of the elements in `aj`

// 		- do it with the built in method

//		- do it with creating a new temp array and a loop

// - Print the elements of the reversed `aj`
let aj = [3, 4, 5, 6, 7];

console.log('Built-in:');

aj.reverse();

console.log(aj);

aj.reverse();
console.log(aj);

console.log('With temp array');

const reversedAj = [];

for (let i = aj.length - 1; i >= 0; i--) {
  reversedAj.push(aj[i]);
}

aj = reversedAj;
console.log(aj);
