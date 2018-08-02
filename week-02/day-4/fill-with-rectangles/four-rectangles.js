'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function getRandomPos(axis, size) {
  if (axis === 'x') {
    return Math.floor((Math.random() * (canvas.clientWidth - size)));
  }
  return Math.floor((Math.random() * (canvas.clientHeight - size)));
}

function drawRect(size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(getRandomPos('x', size), getRandomPos('y', size), size, size);
}

drawRect(30, 'red');
drawRect(50, 'blue');
drawRect(100, 'green');
drawRect(50, 'orange');
