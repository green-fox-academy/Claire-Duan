'use strict';

class Animals {
  constructor(words) {
    this.words = words;
  }

  say() {
    console.log(this.words);
  }
}

const cat = new Animals('meow!');
const dog = new Animals('woof!');
cat.say();
dog.say();