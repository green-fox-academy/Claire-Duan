'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.beginPath();

function drawHexagon(x, y, width) {
  ctx.moveTo(x + width * Math.cos(0), y + width * Math.sin(0));

  for (let i = 0; i < 7; i++) {
    ctx.lineTo(x + width * Math.cos(i * 2 * Math.PI / 6),
      y + width * Math.sin(i * 2 * Math.PI / 6));
  }
  ctx.stroke();
}

function drawHexagons(x, y, width) {
  if (width < 20) {
    return;
  }

  const newWidth = width / 2;
  const newHeight = Math.sqrt(3) / 2 * newWidth;
  drawHexagon(x, y, width);
  drawHexagons(x - newWidth / 2, y + newHeight, newWidth);
  drawHexagons(x - newWidth / 2, y - newHeight, newWidth);
  drawHexagons(x + newWidth, y, newWidth);
}

drawHexagons(400, 400, canvas.height / 2);
