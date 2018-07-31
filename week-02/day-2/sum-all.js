'use strict';

// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`

// - Log the sum of the elements in `ai` to the console
const ai = [3, 4, 5, 6, 7];

// console.log(eval(ai.join('+')));


// let sum = 0;

// ai.forEach(element => sum += element);

// console.log(sum);


let sum = 0;

ai.map(element => sum += element);

console.log(sum);
