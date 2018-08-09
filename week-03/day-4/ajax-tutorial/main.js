'use  strict';

const btn = document.getElementById('btn');
const animalContainer = document.getElementById('animal-info');
let pageCounter = 1;

btn.addEventListener('click', () => {
  const ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
  ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      const ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    }
  };

  ourRequest.onerror = () => {

  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add('hide-me');
  }
});

function renderHTML(data) {
  let htmlString = '';

  for (let i = 0; i < data.length; i++) {
    htmlString += `<p>${data[i].name} id a ${data[i].species} that likes to eat `;
    for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii === 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += ` and ${data[i].foods.likes[ii]}`;
      }
    }

    htmlString += ' and dislikes ';

    for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii === 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += ` and ${data[i].foods.dislikes[ii]}`;
      }
    }

    htmlString += '.</p>';
  }
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
