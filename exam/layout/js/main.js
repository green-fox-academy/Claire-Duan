'use strict';

const URL = 'https://mellow-sugar.glitch.me';
const getText = document.querySelector('button');
const form = document.querySelector('form');
const textArea = document.querySelector('textarea');

const ajax = (method, url, callback, payload = null) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    if (httpRequest.status >= 200 && httpRequest.status < 400) {
      const responseObject = JSON.parse(httpRequest.response);
      callback(responseObject);
    }
  };
  httpRequest.open(method, url);
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.send(JSON.stringify(payload));
};

const updateText = (response) => {
  const str = response.text.replace(new RegExp('\\s+', 'g'), ' ');
  textArea.value = str;
};

getText.onclick = () => {
  this.event.preventDefault();
  ajax('GET', `${URL}/text`, updateText);
};

console.log(getText);
