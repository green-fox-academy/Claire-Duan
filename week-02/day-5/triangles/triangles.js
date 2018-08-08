'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const height = canvas.clientHeight;
const width = canvas.clientWidth;


ctx.strokeStyle = 'black';
ctx.beginPath();

function distance(point1, point2) {
  const dis = Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
  return dis;
}

function drawTriangles(point1, point2, point3) {
  ctx.moveTo(point1[0], point1[1]);
  ctx.lineTo(point2[0], point2[1]);
  ctx.lineTo(point3[0], point3[1]);
  ctx.lineTo(point1[0], point1[1]);
  ctx.stroke();
}

function midPoint (point1, point2) {
  const midPo = [Math.abs((point2[0] + point1[0]) / 2), Math.abs((point2[1] + point1[1]) / 2)];
  return midPo;
}

function getNewPoints(point1, point2, point3) {
  const newPoints = [];
  newPoints.push(midPoint(point1, point2));
  newPoints.push(midPoint(point1, point3));
  newPoints.push(midPoint(point2, point3));
  return newPoints;
}

function factorialTriangles(point1, point2, point3) {
  if (distance(point1, point2) < 10) {
    return;
  }
  drawTriangles(point1, point2, point3);
  const newPoints = getNewPoints(point1, point2, point3);
  factorialTriangles(point1, newPoints[0], newPoints[1]);
  factorialTriangles(newPoints[0], point2, newPoints[2]);
  factorialTriangles(newPoints[1], newPoints[2], point3);
}

factorialTriangles([width, 0], [width / 2, height], [0, 0]);
