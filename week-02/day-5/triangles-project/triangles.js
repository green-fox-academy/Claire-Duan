'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const width = canvas.clientWidth;
const height = canvas.clientHeight;
const midWidth = width / 2;
const triangleWidth = 20;
const startingPoint = [midWidth, 0];

function drawTriangle(startPoint) {
  ctx.beginPath();
  ctx.moveTo(startPoint[0], startPoint[1]);
  ctx.lineTo(startPoint[0] - triangleWidth / 2, startPoint[1] + triangleWidth);
  ctx.lineTo(startPoint[0] + triangleWidth / 2, startPoint[1] + triangleWidth);
  ctx.lineTo(startPoint[0], startPoint[1]);
  ctx.stroke();
}

function drawTriangles(startPoint, amount) {
  const newStartPoint = [startPoint[0], startPoint[1]];
  for (let i = 0; i < amount; i++) {
    drawTriangle(newStartPoint);
    if (i < amount - 1) {
      ctx.lineTo(newStartPoint[0] + triangleWidth, newStartPoint[1]);
      ctx.stroke();
    }
    newStartPoint[0] += triangleWidth;
    // const newStartPoint = [startPoint + triangleWidth, startPoint[1]];
    // drawTriangles(newStartPoint, amount--);
  }
}

function triangles(startPoint) {
  for (let i = 1; i <= height / 5; i++) {
    drawTriangles(startPoint, i);
    console.log(startPoint);
    startPoint[0] = startPoint[0] - triangleWidth / 2;
    startPoint[1] = startPoint[1] + triangleWidth;
  }
}

triangles(startingPoint);
