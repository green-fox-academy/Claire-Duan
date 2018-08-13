'use strict';

const button = document.querySelector('button');

function Animal(hunger = 5, thirst = 5) {
  this.hunger = hunger;
  this.thirst = thirst;

  this.eat = function () {
    this.hunger--;
  };

  this.drink = function () {
    this.thirst--;
  };

  this.play = function () {
    this.hunger++;
    this.thirst++;
  };
}

function Farm(slots = 10, animals = []) {
  this.slots = slots;
  this.animals = animals;

  this.breed = function () {
    if (slots > 0) {
      this.animals.push(new Animal());
    }
  };

  this.slaughter = function () {
    if (this.animals.length > 0) {
      this.animals.pop();
    }
  };

  this.report = function () {
    let result;
    const animalNum = this.animals.length;
    if (animalNum >= this.slots) {
      result = ', we are full.';
    } else if (animalNum > 0) {
      result = ', we are okay.';
    } else {
      result = ', we are bankrupt.';
    }
    console.log(`The farm has ${this.animals.length} living animals${result}`);
  };

  this.progress = function () {
    this.animals.forEach(animal => {
      if (Math.random() > 0.5) { animal.eat(); }
      if (Math.random() > 0.5) { animal.drink(); }
      if (Math.random() > 0.5) { animal.play(); }
    });
    if (Math.random() > 0.5) { this.slaughter(); }
    if (Math.random() > 0.5) { this.breed(); }
    this.report();
  };
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);
for (let i = 0; i < SheepFarm.slots; i++) {
  SheepFarm.breed();
}
console.log(SheepFarm.animals); // Should log 20 Animal objects

// Add a click event to the button and call 'progress'

button.addEventListener('click', () => {
  SheepFarm.progress();
  console.log(SheepFarm.animals);
});

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full
