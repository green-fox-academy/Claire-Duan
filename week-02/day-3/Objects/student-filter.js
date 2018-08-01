'use strict';

const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs:
//  - how many candies they have on average
function candyAve(stus) {
  let sum = 0;
  stus.forEach(element => sum += element.candies);
  return sum/stus.length;
}

function moreThan4Candies(stus) {
  const names = [];
  stus.forEach(element => {
    if(element.candies > 4) {
      names.push(element.name);
    }
  });
  return names;
}

console.log(candyAve(students));
console.log(moreThan4Candies(students));
