// function dis() {
//   var i = 12;
//   console.log(i);
// }

// console.log(i);

// const arr = ['a', 'b', 'c'];
// console.log(arr.toString());
// console.log(arr.join(","));

const arr = [1,2,3];
const print = function(number){console.log(number)};
arr.forEach(print);

arr.forEach(function(number){console.log(number)});

arr.forEach(element => console.log(element));

const newArr = arr.map(number => number*2);
console.log(arr);
console.log(newArr);

