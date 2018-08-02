'use strict';

const canvas = document.querySelector('.main-canvas');

const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

const height = canvas.clientHeight;
const width = canvas.clientWidth;

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(width, height);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(width, 0);
ctx.lineTo(0, height);
ctx.strokeStyle = 'red';
ctx.stroke();
