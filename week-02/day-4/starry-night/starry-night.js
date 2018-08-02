'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const loopNumber = 100;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

function getRandomCord(axis) {
  if (axis === 'x') {
    return Math.floor((Math.random() * canvas.clientWidth));
  }
  return Math.floor((Math.random() * canvas.clientHeight));
}

for (let i = 0; i < loopNumber; i++) {
  const x = getRandomCord('x');
  const y = getRandomCord('y');
  const transparency = Math.random();

  ctx.fillStyle = `rgba(128, 128, 128, ${transparency})`;
  ctx.fillRect(x, y, 10, 10);
}
