'use strict';

const URL = 'https://mellow-sugar.glitch.me';
const getText = document.querySelector('button');
const form = document.querySelector('form');
const textArea = document.querySelector('textarea');
const stateBox = document.querySelector('p');

const ajax = (method, url, callback = console.log, payload = null) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    if (httpRequest.status >= 200 && httpRequest.status < 400) {
      if (httpRequest.response) {
        const responseObject = JSON.parse(httpRequest.response);
        callback(responseObject);
      } else {
        callback('OK');
      }
    } else if (Object.keys(JSON.parse(httpRequest.response)).includes('expected')) {
      callback('WRONG');
    }
  };
  httpRequest.open(method, url);
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.send(JSON.stringify(payload));
};

const updateText = (response) => {
  textArea.dataset.index = response.id;
  const str = response.text.replace(new RegExp(' +', 'g'), ' ');
  textArea.value = str;
};

getText.onclick = (e) => {
  e.preventDefault();
  ajax('GET', `${URL}/text`, updateText);
};

const setState = (state) => {
  if (state === 'OK') {
    stateBox.textContent = state;
    stateBox.className = 'ok';
  } else if (state === 'WRONG') {
    stateBox.textContent = state;
    stateBox.className = 'wrong';
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const requestBody = {};
  requestBody.id = parseInt(textArea.dataset.index, 10);
  requestBody.text = textArea.value;

  ajax('POST', `${URL}/text`, setState, requestBody);
});
