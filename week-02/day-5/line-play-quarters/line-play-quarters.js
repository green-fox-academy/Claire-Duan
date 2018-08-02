'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const step = 20;
const height = canvas.clientHeight;
const width = canvas.clientWidth;

ctx.strokeStyle = 'green';

for (let i = step; i < width; i += step) {
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(width, i);
  ctx.stroke();
}

ctx.strokeStyle = 'purple';

for (let i = step; i < width; i += step) {
  ctx.beginPath();
  ctx.moveTo(0, i);
  ctx.lineTo(i, height);
  ctx.stroke();
}
