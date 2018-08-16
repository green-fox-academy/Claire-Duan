'use strict';

class Garden {
  constructor() {
    this.plants = [];
  }

  addPlant(plant) {
    this.plants.push(plant);
  }

  watering(amount) {
    console.log(`Watering with ${amount}`);
    let counter = 0;
    this.plants.forEach(plant => {
      if (plant.checkNeedWater()) {
        counter++;
      }
    });
    const water = amount / counter;
    this.plants.forEach(plant => plant.watering(water));
  }

  state() {
    this.plants.forEach(plant => {
      const str = (plant.checkNeedWater()) ? 'needs water' : 'doesnt need water';
      console.log(`the ${plant.color} ${plant.type} ${str}`);
    });
  }
}

class Plant {
  constructor(type, waterLevel, absorbRatio, color) {
    this.type = type;
    this.waterAmount = 0;
    this.waterLevel = waterLevel;
    this.absorbRatio = absorbRatio;
    this.color = color;
  }

  checkNeedWater() {
    return this.waterAmount < this.waterLevel;
  }

  watering(wateringAmount) {
    this.waterAmount = this.waterAmount + wateringAmount * this.absorbRatio;
  }
}

class Flower extends Plant {
  constructor(color) {
    super('Flower', 5, 0.75, color);
  }
}

class Tree extends Plant {
  constructor(color) {
    super('Tree', 10, 0.4, color);
  }
}

const garden = new Garden();
const flower1 = new Flower('yellow');
const flower2 = new Flower('blue');
const tree1 = new Tree('purple');
const tree2 = new Tree('orange');
garden.addPlant(flower1);
garden.addPlant(flower2);
garden.addPlant(tree1);
garden.addPlant(tree2);

garden.state();
garden.watering(40);
garden.state();
garden.watering(70);
garden.state();
