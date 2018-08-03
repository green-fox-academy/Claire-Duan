'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const width = canvas.clientWidth;
const height = canvas.clientHeight;
const midWidth = width / 2;
const shapeWidth = 20;
const gap = Math.sqrt(3) / 2;
const startingPoint = [midWidth, 0];
const level = 4;

function drawShape(startPoint) {
  ctx.beginPath();
  ctx.moveTo(startPoint[0], startPoint[1]);
  ctx.lineTo(startPoint[0] - shapeWidth / 2, startPoint[1] + shapeWidth * gap);
  ctx.lineTo(startPoint[0], startPoint[1] + shapeWidth * gap * 2);
  ctx.lineTo(startPoint[0] + shapeWidth, startPoint[1] + shapeWidth * gap * 2);
  ctx.lineTo(startPoint[0] + shapeWidth * 3 / 2, startPoint[1] + shapeWidth * gap);
  ctx.lineTo(startPoint[0] + shapeWidth, startPoint[1]);
  ctx.lineTo(startPoint[0], startPoint[1]);
  ctx.stroke();
}

function drawShapes(startPoint, amount, repeat) {
  const newStartPoint = [startPoint[0], startPoint[1]];
  for (let i = 0; i < amount; i++) {
    drawShape(newStartPoint);
    if (repeat && i < amount - 1) {
      ctx.moveTo(newStartPoint[0] + shapeWidth * 3 / 2, newStartPoint[1] + shapeWidth * gap);
      ctx.lineTo(newStartPoint[0] + shapeWidth * 5 / 2, newStartPoint[1] + shapeWidth * gap);
      ctx.stroke();
    }
    newStartPoint[0] += (shapeWidth * 3);
    // const newStartPoint = [startPoint + shapeWidth, startPoint[1]];
    // drawTriangles(newStartPoint, amount--);
  }
}

function triangles(startPoint) {
  for (let i = 1; i < level; i++) {
    drawShapes(startPoint, i, false);
    startPoint[0] -= shapeWidth * 3 / 2;
    startPoint[1] += shapeWidth * gap;
  }

  for (let i = 0; i < level; i++) {
    drawShapes(startPoint, level, true);
    if (i !== level - 1) {
      startPoint[1] += shapeWidth * gap * 2;
    }
  }

  startPoint[0] += shapeWidth * 3 / 2;
  startPoint[1] += shapeWidth * gap;

  for (let i = 1; i < level; i++) {
    drawShapes(startPoint, level - i, false);
    startPoint[0] += shapeWidth * 3 / 2;
    startPoint[1] += shapeWidth * gap;
  }
}

triangles(startingPoint);
