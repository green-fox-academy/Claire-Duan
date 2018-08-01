'use strict';

const students = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candyNum(stus) {
  let sum = 0;
  stus.forEach(element => sum += element.candies);
  return sum;
}

function sumAge(stus) {
  let sum = 0;
  stus.forEach(element => {
    if(element.candies < 5) {
      sum += element.age;
    }
  });
  return sum;
}

console.log(candyNum(students));
console.log(sumAge(students));
