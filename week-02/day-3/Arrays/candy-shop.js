'use strict';

const shop_items = ["Cupcake", 2, "Brownie", false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 2) {
      arr[i] = 'Crossiant';
    }
    else if(arr[i] === false) {
      arr[i] = 'Ice cream';
    }
  }
  return arr;
}

console.log(sweets(shop_items));

module.exports = sweets;
