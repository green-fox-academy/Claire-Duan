class Example {
  constructor() {
    this.value = 5;
  }
}

const ex = new Example();
Example.prototype.value = 6;
console.log(ex.value);
console.log(Example.prototype.value);
console.log(ex.__proto__.value);

console.log(ex.__proto__);
console.log(Example.prototype);

