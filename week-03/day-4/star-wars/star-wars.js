const charaList = document.querySelector('.characters');
const filmList = document.querySelector('.films');
const button = document.querySelector('button');
const input = document.querySelector('input');
const peoplePath = 'https://swapi.co/api/people/?search=';

const ajax = (method, url, callback, payload = null) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open(method, url);
  httpRequest.send(JSON.stringify(payload));
};

const clearDomElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const peopleRenderer = (response) => {
  clearDomElement(charaList);
  clearDomElement(filmList);
  console.log(response);

  response.results.forEach((character) => {
    const listItem = document.createElement('li');

    listItem.textContent = character.name;
    charaList.appendChild(listItem);

    listItem.onclick = () => {
      clearDomElement(filmList);
      character.films.forEach(filmURL => {
        ajax('GET', filmURL, filmRenderer);
      });
    };
  });
};

const filmRenderer = (response) => {
  const listItem = document.createElement('li');
  listItem.textContent = response.title;
  filmList.appendChild(listItem);
};

button.onclick = () => {
  const query = input.value;
  if (input !== '') {
    const url = peoplePath + query;
    ajax('GET', url, peopleRenderer);
  }
};
