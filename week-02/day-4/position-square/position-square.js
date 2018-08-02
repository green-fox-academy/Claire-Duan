'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const width = 50;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x, y) {
  ctx.fillStyle = 'green';
  ctx.fillRect(x, y, width, width);
}

drawSquare(5, 7);
drawSquare(89, 56);
drawSquare(300, 201);
