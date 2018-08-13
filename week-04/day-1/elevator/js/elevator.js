'use strict';

const elevator = document.querySelector('.elevator');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const add = document.querySelector('.add');
const remove = document.querySelector('.remove');

function disableButtons() {
  up.disabled = true;
  down.disabled = true;
  add.disabled = true;
  remove.disabled = true;
}

function enableButtons() {
  up.disabled = false;
  down.disabled = false;
  add.disabled = false;
  remove.disabled = false;
}

class ElevatorModel {
  constructor(maxFloor, maxPeople, position = 1, direction = 'up', people = 0) {
    this.maxFloor = maxFloor;
    this.maxPeople = maxPeople;
    this.position = position;
    this.direction = direction;
    this.people = people;
  }

  initializeElevator() {
    for (let i = 0; i < this.maxFloor; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (i === this.maxFloor - 1) {
        cell.classList.add('chosen');
        cell.textContent = 0;
      }
      elevator.appendChild(cell);
    }
  }

  up() {
    if (this.position < this.maxFloor) {
      this.direction = 'up';
      this.position++;
      return true;
    }
    return false;
  }

  down() {
    if (this.position > 1) {
      this.direction = 'down';
      this.position--;
      return true;
    }
    return false;
  }

  add() {
    this.people++;
  }

  remove() {
    if (this.people > 0) {
      this.people--;
    }
  }

  checkPeople() {
    if (this.people < this.maxPeople) {
      return true;
    }
    return false;
  }
}

class ElevatorView {
  constructor(model) {
    this.model = model;
  }

  up() {
    const presentIndex = this.model.maxFloor - this.model.position;
    elevator.children[presentIndex + 1].classList.remove('chosen');
    elevator.children[presentIndex + 1].textContent = '';
    elevator.children[presentIndex].classList.add('chosen');
    elevator.children[presentIndex].textContent = this.model.people;
    enableButtons();
  }

  down() {
    const presentIndex = this.model.maxFloor - this.model.position;
    elevator.children[presentIndex - 1].classList.remove('chosen');
    elevator.children[presentIndex - 1].textContent = '';
    elevator.children[presentIndex].classList.add('chosen');
    elevator.children[presentIndex].textContent = this.model.people;
    enableButtons();
  }

  add() {
    elevator.children[this.model.maxFloor - this.model.position].textContent = this.model.people;
  }

  remove() {
    elevator.children[this.model.maxFloor - this.model.position].textContent = this.model.people;
  }
}

class ElevatorController {
  constructor() {
    this.model = new ElevatorModel(10, 20);
    this.viewer = new ElevatorView(this.model);
  }

  handleEvents() {
    up.onclick = () => {
      if (this.model.up()) {
        disableButtons();
        setTimeout(this.viewer.up.bind(this.viewer), 1500);
      }
    };
    down.onclick = () => {
      if (this.model.down()) {
        disableButtons();
        setTimeout(this.viewer.down.bind(this.viewer), 1500);
      }
    };
    add.onclick = () => {
      if (this.model.checkPeople()) {
        this.model.add();
        this.viewer.add();
      }
    };
    remove.onclick = () => {
      this.model.remove();
      this.viewer.remove();
    };
  }
}

const controller = new ElevatorController();
controller.model.initializeElevator();
controller.handleEvents();
