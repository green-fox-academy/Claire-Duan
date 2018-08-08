'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.beginPath();

function drawLines(x, y, width) {
  const interval = width / 3;
  ctx.moveTo(x, y + interval);
  ctx.lineTo(x + width, y + interval);
  ctx.moveTo(x, y + interval * 2);
  ctx.lineTo(x + width, y + interval * 2);
  ctx.moveTo(x + interval, y);
  ctx.lineTo(x + interval, y + width);
  ctx.moveTo(x + interval * 2, y);
  ctx.lineTo(x + interval * 2, y + width);
  ctx.stroke();
}

function drawSquare(x, y, width) {
  if (width < 30) {
    return;
  }

  const newWidth = width / 3;

  drawLines(x, y, width);
  drawSquare(x + newWidth, y, newWidth);
  drawSquare(x, y + newWidth, newWidth);
  drawSquare(x + newWidth, y + newWidth * 2, newWidth);
  drawSquare(x + newWidth * 2, y + newWidth, newWidth);
}

drawSquare(0, 0, canvas.height);
