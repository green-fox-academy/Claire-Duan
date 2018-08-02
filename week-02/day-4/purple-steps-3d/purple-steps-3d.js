'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
let width = 0;
const gap = 10;
const steps = 8;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
let sumWidth = 0;
ctx.fillStyle = 'purple';
for (let i = 0; i < steps; i++) {
  const cordinate = sumWidth;
  width += gap;
  ctx.fillRect(cordinate, cordinate, width, width);
  sumWidth += width;
}
