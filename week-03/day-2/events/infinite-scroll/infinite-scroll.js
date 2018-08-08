'use strict';

const body = document.body;
const script = document.querySelector('script');
const scrollThreshold = 300;
const initialNum = 10;

function randomNum() {
  return Math.floor(Math.random() * 255);
}

function generateColor() {
  return [randomNum(), randomNum(), randomNum()];
}

function createNewDiv() {
  const newDiv = document.createElement('div');
  const colorArr = generateColor();
  newDiv.style.backgroundColor = `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`;
  return newDiv;
}

function generateDivs() {
  for (let i = 0; i < initialNum; i++) {
    body.insertBefore(createNewDiv(), script);
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= body.scrollHeight - scrollThreshold) {
    generateDivs();
  }
});

generateDivs();
