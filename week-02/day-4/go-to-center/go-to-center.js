'use strict';

const canvas = document.querySelector('.main-canvas');

const ctx = canvas.getContext('2d');

const height = canvas.clientHeight;
const width = canvas.clientWidth;
const startPos = 10;
const border = 40;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawLine(x, y) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(x, y);
  ctx.lineTo(width / 2, height / 2);
  ctx.stroke();
}

for (let i = startPos; i < border; i += startPos) {
  drawLine(i, i);
}
