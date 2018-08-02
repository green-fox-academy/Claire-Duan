'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
const midX = canvas.clientWidth / 2;
const midY = canvas.clientHeight / 2;
const width = 10;

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

ctx.fillStyle = 'green';
ctx.fillRect(midX - width / 2, midY - width / 2, width, width);
