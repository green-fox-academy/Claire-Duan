'use strict';

const canvas = document.querySelector('.main-canvas');

const ctx = canvas.getContext('2d');

function connectDots(points) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  points.forEach(point => ctx.lineTo(point[0], point[1]));
  ctx.stroke();
}

const pointArr1 = [[10, 10], [290, 10], [290, 290], [10, 290]];
const pointArr2 = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
  [120, 100], [85, 130], [50, 100]];

connectDots(pointArr1);
connectDots(pointArr2);
