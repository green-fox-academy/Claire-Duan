'use strict';

// Saturn is missing from the planetList

// Insert it into the correct position

// Create a function called putSaturn() which has list parameter and returns the correct list.

// bonus for using some built in methods

const planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// console.log(planetList);


function putSaturn(arr) {
  planetList.push("Saturn");
  return planetList;
}

// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn";

console.log(putSaturn(planetList));

module.exports = putSaturn;
