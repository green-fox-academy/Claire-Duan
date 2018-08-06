const greenFox = document.createElement('li');
const lampLighter = document.createElement('li');

greenFox.textContent = 'The Green Fox';
lampLighter.textContent = 'The LampLighter';

const list = document.getElementsByTagName('ul')[0];
list.appendChild(greenFox);
list.appendChild(lampLighter);

const container = document.getElementsByClassName('container')[0];
const header = document.createElement('h1');
header.textContent = 'I can add elements to the DOM!';
container.appendChild(header);


