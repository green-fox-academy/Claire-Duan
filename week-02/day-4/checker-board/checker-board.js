'use strict';
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.
for (let x = 0; x < canvas.clientWidth; x += 50) {
  for (let y = 0; y < canvas.clientHeight; y += 50) {
    if ((x / 50 + y / 50) % 2) {
      ctx.fillStyle = 'black';
    }
    else {
      ctx.fillStyle = 'white';
    }
    ctx.fillRect(x, y, 50, 50);
  }
}
