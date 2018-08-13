'use strict';

function Sharpie(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;

  this.use = function () {
    this.inkAmount -= this.width;
  };
}

const sharpie = new Sharpie('red', 10);
console.log(sharpie);

while (sharpie.inkAmount > 0) {
  sharpie.use();
}
console.log(sharpie);
