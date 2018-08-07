'use strict';

const button = document.querySelector('button');
const text = '2 seconds ellapsed';

function displayLine() {
  const newElement = document.createElement('p');
  newElement.textContent = text;
  button.parentNode.appendChild(newElement);
}

button.onclick = () => {
  setTimeout(displayLine, 2000);
};
