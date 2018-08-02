'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const step = 20;
const height = canvas.clientHeight;
const width = canvas.clientWidth;
const midWidth = width / 2;
const midHeight = height / 2;

ctx.strokeStyle = 'green';

for (let i = step; i < midHeight; i += step) {
  ctx.beginPath();
  ctx.moveTo(midWidth, i);
  ctx.lineTo(midWidth + i, midHeight);
  ctx.stroke();
  ctx.moveTo(midWidth, height - i);
  ctx.lineTo(midWidth + i, midHeight);
  ctx.stroke();
  ctx.moveTo(midWidth, height - i);
  ctx.lineTo(midWidth - i, midHeight);
  ctx.stroke();
  ctx.moveTo(midWidth, i);
  ctx.lineTo(midWidth - i, midHeight);
  ctx.stroke();
}
