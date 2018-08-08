'use strict';

const myDiv = document.querySelector('div');
const width = myDiv.clientWidth;
const divPositionX = myDiv.offsetLeft;

function isLeftSide(num) {
  return num >= divPositionX && num <= divPositionX + width / 2;
}

myDiv.addEventListener('click', (ev) => {
  if (isLeftSide(ev.clientX)) {
    ev.target.style.backgroundColor = 'yellow';
  } else {
    ev.target.style.backgroundColor = 'blue';
  }
});
