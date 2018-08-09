const container = document.querySelector('.container');
const button = document.querySelector('button');
const input = document.querySelector('input');
const searhPath = 'https://api.giphy.com/v1/gifs/search?';
const apiKey = '&api_key=ugYDJgKe6CBq7CxKxnQE8KybIuJVl9E8';
const limit = '&limit=16';

const ajax = (method, url, callback, payload = null) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open(method, url);
  // httpRequest.setRequestHeader();
  httpRequest.send(JSON.stringify(payload));
};

const clearDomElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const resultRenderer = (response) => {
  clearDomElement(container);
  response.data.forEach((gif) => {
    const gifElement = document.createElement('img');
    gifElement.src = gif.images.original_still.url;
    container.appendChild(gifElement);

    gifElement.onclick = () => {
      gifElement.src = gif.images.original.url;
    };
  });
};

const splitQuery = (string) => {
  const queryArray = string.split(' ');
  let query = 'q=';
  queryArray.forEach((element, index) => {
    query += (index !== queryArray.length - 1) ? `${element}+` : `${element}`;
  });
  return query;
};

button.onclick = () => {
  const searchString = input.value;
  if (input !== '') {
    const query = splitQuery(searchString);
    const url = searhPath + query + apiKey + limit;
    ajax('GET', url, resultRenderer);
  }
};
