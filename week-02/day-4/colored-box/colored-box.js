'use strict';

const canvas = document.querySelector('.main-canvas');

const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(10, 10);
ctx.lineTo(10, 110);
ctx.stroke();
ctx.strokeStyle = 'red';
ctx.lineTo(110, 110);
ctx.stroke();
ctx.strokeStyle = 'green';
ctx.lineTo(110, 10);
ctx.stroke();
ctx.strokeStyle = 'pink';
ctx.lineTo(10, 10);
ctx.stroke();
