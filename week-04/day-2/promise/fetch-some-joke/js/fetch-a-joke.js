'use strict';

const container = document.querySelector('div');
const button = document.querySelector('button');

const URL = 'http://api.icndb.com/jokes/random';

const generateRandomNum = () => Math.random() * 255;

const generateRandomColor = () => `rgb(${generateRandomNum()}, ${generateRandomNum()}, ${generateRandomNum()})`;

const displayJokes = (joke) => {
  const jokeBox = document.createElement('p');
  jokeBox.textContent = joke;
  jokeBox.style.backgroundColor = generateRandomColor();
  container.appendChild(jokeBox);
};

const fetchJoke = () => {
  fetch(URL)
    .then((response) => response.json())
    .then(response => {
      displayJokes(response.value.joke);
    })
    .catch(response => {
      console.log(`Fetch fails: ${response}`);
    });
};

button.onclick = () => {
  fetchJoke();
};
