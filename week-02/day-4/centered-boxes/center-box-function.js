'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const midX = canvas.clientWidth / 2;
const midY = canvas.clientHeight / 2;
const squareAmount = 3;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function centerBox(size) {
  const x = midX - size / 2;
  const y = midY - size / 2;
  ctx.strokeStyle = 'green';
  ctx.strokeRect(x, y, size, size);
}

for (let i = 1; i <= squareAmount; i++) {
  centerBox(i * 20);
}
