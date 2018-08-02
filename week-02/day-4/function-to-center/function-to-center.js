'use strict';

const canvas = document.querySelector('.main-canvas');

const ctx = canvas.getContext('2d');
function drawLine(x, y) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.scrollWidth / 2, canvas.scrollHeight / 2);
  ctx.stroke();
}

for (let x = 0; x < canvas.scrollWidth; x += 20) {
  drawLine(x, 0);
  drawLine(x, canvas.scrollHeight);
}
for (let y = 0; y < canvas.scrollHeight; y += 20) {
  drawLine(0, y);
  drawLine(canvas.scrollWidth, y);
}
