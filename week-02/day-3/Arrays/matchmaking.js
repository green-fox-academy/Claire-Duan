'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array

// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];

const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];

function makingMatches (girls, boys) {
  let newArr = [];
  let minLength = boys.length;
  let fisrtArr = false;
  if (girls.length < boys.length) {
    minLength = girls.length;
    fisrtArr = true;
  }

  for (let i = 0; i < minLength; i++) {
    if (fisrtArr) {
      newArr.push(girls[i]);
      newArr.push(boys[i]);
    }
    else {
      newArr.push(boys[i]);
      newArr.push(girls[i]);
    }
  }

  if (fisrtArr) {
    newArr = newArr.concat(boys.splice(minLength, boys.length));
  }
  else {
    newArr = newArr.concat(girls.splice(minLength, girls.length));
  }

  return newArr;
}

console.log(makingMatches(girls, boys));

module.exports = makingMatches;
