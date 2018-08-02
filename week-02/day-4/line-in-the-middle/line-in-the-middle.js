'use strict';

const canvas = document.querySelector('.main-canvas');

const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

const midWidth = canvas.clientWidth / 2;
const midHeight = canvas.clientHeight / 2;

ctx.beginPath();
ctx.moveTo(midWidth, 0);
ctx.lineTo(midWidth, canvas.clientHeight);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, midHeight);
ctx.lineTo(canvas.clientWidth, midHeight);
ctx.strokeStyle = 'red';
ctx.stroke();
