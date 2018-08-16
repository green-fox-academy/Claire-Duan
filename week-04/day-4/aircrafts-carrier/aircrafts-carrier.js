'use strict';

class Aircraft {
  constructor(type, maxAmmo, baseDamage) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.ammoStore = 0;
    this.allDamage = 0;
  }

  fight() {
    this.allDamage = this.ammoStore * this.baseDamage;
    this.ammoStore = 0;
    return this.allDamage;
  }

  refill(amount) {
    this.ammoStore = (amount > this.maxAmmo) ? this.maxAmmo : amount;
    return (amount > this.maxAmmo) ? (amount - this.maxAmmo) : 0;
  }

  getType() {
    return this.type;
  }

  getStatus() {
    console.log(`Type ${this.type}, Ammo: ${this.ammoStore}, Base Data: ${this.baseDamage}, All Damage: ${this.allDamage}`);
  }

  isPriority() {
    return this.type === 'F35';
  }
}

class F16 extends Aircraft {
  constructor() {
    super('F16', 8, 30);
  }
}

class F35 extends Aircraft {
  constructor() {
    super('F35', 12, 50);
  }
}

class Carrier {
  constructor(ammoStorage, healthPoint) {
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
    this.aircrafts = [];
    this.totalDamage = 0;
  }

  add(aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() {
    this.aircrafts.forEach(aircraft => {
      this.ammoStorage = aircraft.refill(this.ammoStorage);
    });
  }

  fight(enemy) {
    let damage = 0;
    this.aircrafts.forEach(aircraft => {
      damage += aircraft.fight();
    });
    enemy.healthPoint = (enemy.healthPoint > damage)
      ? enemy.healthPoint - damage
      : 0;
    this.totalDamage += damage;
  }

  getStatus() {
    console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage}, Total Damage: ${this.totalDamage}`);
    console.log('Aircrafts:');
    this.aircrafts.forEach(aircraft => {
      aircraft.getStatus();
    });
    if (this.healthPoint <= 0) {
      console.log('It\'s dead Jmi :(');
    }
  }
}

const carrier1 = new Carrier(3000, 5000);
const carrier2 = new Carrier(2000, 4000);

carrier1.add(new F35());
carrier1.add(new F35());
carrier1.add(new F16());
carrier1.add(new F16());
carrier1.add(new F16());

carrier2.add(new F35());
carrier2.add(new F35());
carrier2.add(new F35());
carrier2.add(new F16());
carrier2.add(new F16());

carrier1.fill();
carrier2.fill();

console.log('Before fighting');
carrier1.getStatus();
carrier2.getStatus();

console.log('First fight');
carrier1.fight(carrier2);
carrier1.getStatus();
carrier2.getStatus();

console.log('Second fight');
carrier1.fill();
carrier1.fight(carrier2);
carrier1.getStatus();
carrier2.getStatus();

console.log('Third fight');
carrier1.fill();
carrier1.fight(carrier2);
carrier1.getStatus();
carrier2.getStatus();
// carrier2.fight(carrier1);
// carrier2.getStatus();
