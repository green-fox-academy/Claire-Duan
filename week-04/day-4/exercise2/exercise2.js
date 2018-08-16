'use strict';

class Rectangles {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getCircumference() {
    return (this.width + this.height) * 2;
  }
}

const rec1 = new Rectangles(3, 4);
const rec2 = new Rectangles(5, 6);
console.log(rec1.getArea());
console.log(rec1.getCircumference());
console.log(rec2.getArea());
console.log(rec2.getCircumference());
