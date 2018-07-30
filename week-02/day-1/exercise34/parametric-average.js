'use strict';
// Write a program that asks for a number.

// It would ask this many times to enter an number,

// if all the numbers are entered, it should print the sum and average of these

// numbers like:

// Sum: 22, Average: 4.4

let numbers=[];
let i=1;
let sum=0;

for(i=0; i<5; i++) {
  numbers[i] = Number(window.prompt("Please enter a number: ", 0));
  sum+=numbers[i];
}

document.write("Sum: " + sum + ", Average: " + sum/i);
