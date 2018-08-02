'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const midX = canvas.clientWidth / 2;
const midY = canvas.clientHeight / 2;
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const gap = 50;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function rainBox(size, color) {
  const x = midX - size / 2;
  const y = midY - size / 2;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

for (let i = canvas.clientWidth / gap; i > 0; i--) {
  rainbowColors.forEach((color, index) => {
    rainBox(i * gap, color);
    if (index !== rainbowColors.length - 1) {
      i--;
    }
  });
}
