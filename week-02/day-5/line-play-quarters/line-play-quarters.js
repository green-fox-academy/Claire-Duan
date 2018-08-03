'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
let step = 0;
// const step = 20;
const canvasHeight = canvas.clientHeight;
const canvasWidth = canvas.clientWidth;


function drawPurple(width, height, pos) {
  ctx.strokeStyle = 'purple';
  for (let i = step; i < width; i += step) {
    // ctx.beginPath();
    ctx.moveTo(i + pos, 0 + height);
    // ctx.moveTo(i, 0);
    ctx.lineTo(width + pos, i + height);
    // ctx.lineTo(width, i);
    ctx.stroke();
  }
}

function drawGreen(width, height, pos) {
  ctx.strokeStyle = 'green';
  for (let i = step; i < width; i += step) {
    ctx.beginPath();
    ctx.moveTo(pos, i + height);
    // ctx.moveTo(0, i);
    ctx.lineTo(pos + i, height + width);
    // ctx.lineTo(i, height);
    ctx.stroke();
  }
}

function playQuarters(width, height, amount) {
  const indent = Math.sqrt(amount);
  const quarter = width / indent;
  step = quarter / 20;
  for (let i = 0; i < indent; i++) {
    for (let j = 0; j < indent; j++) {
      drawPurple(quarter, i * quarter, j * quarter);
      drawGreen(quarter, i * quarter, j * quarter);
    }
  }
}

playQuarters(canvasWidth, canvasHeight, 64);
// drawGreen(canvasWidth, canvasHeight);
// drawPurple(canvasWidth, canvasHeight);
