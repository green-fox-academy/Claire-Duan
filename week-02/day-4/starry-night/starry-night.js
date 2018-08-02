'use strict';

const canvas = document.querySelector('.main-canvas');

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

function getRandomCor(axis) {
  if (axis === 'x') {
    return Math.floor((Math.random() * canvas.clientWidth));
  }
  return Math.floor((Math.random() * canvas.clientHeight));
}

function getRandomColor(){}

for (let i = 0; i < 10; i++) {
  const x = getRandomCor('x');
  const y = getRandomCor('y');
  const transparency = Math.random();
  console.log(transparency);

  ctx.clearRect(x, y, 30, 30);
  ctx.fillStyle = `rgba(1, 1, 1, ${transparency})`;
  ctx.fillRect(x, y, 30, 30);
}

