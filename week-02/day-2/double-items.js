'use strict';

// - Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`

// - Double all the strings in the array, use a built in array method instead of a loop

// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
const drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];

const doubledDrinks = drinks.map(drink => drink + drink);

console.log(doubledDrinks);

