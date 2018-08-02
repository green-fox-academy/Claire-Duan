'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const width = 10;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

ctx.fillStyle = 'purple';
for (let i = 0; i < canvas.width / width; i++) {
  const cordinate = i * width;
  ctx.fillRect(cordinate, cordinate, width, width);
}
