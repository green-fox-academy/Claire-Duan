'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(nums) {
  if (nums.indexOf(7) >= 0) {
    return 'Hoorray';
  }
  return 'Noooooo';
}

console.log(containsSeven(numbers));

// The output should be: "Noooooo"

// Do this again with a different solution using different list functions!

module.exports = containsSeven;
