'use strict';

const header = document.querySelector('h1');
const button = document.querySelector('button');

const Eminem = {
  name: 'Slim shady',
  speak: function () {
    // 1) Update the <h1> node text to this.name
    header.textContent += ` ${this.name}`;
  },
};

// 2) Add a click event on the button and assign Eminem.speak to it
// Don't use a wrapper function

button.addEventListener('click', Eminem.speak.bind(Eminem));

// button.onclick = Eminem.speak();
