'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const startPos = 10;
const border = 40;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawHorizontalLine (x, y) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y);
  ctx.stroke();
}

for (let i = startPos; i < border; i += startPos) {
  drawHorizontalLine(i, i);
}
