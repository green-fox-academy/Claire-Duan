'use strict';

const URL_POST = 'http://52.57.196.190:3002/posts';
const submit = document.querySelector('[type="submit"]');
const form = document.querySelector('form');
console.log(submit);

const title = document.querySelector('textarea');
const urlInput = document.querySelector('[type="url"]');

const ajax = (method, url, callback, payload = null) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    if (httpRequest.status >= 200 && httpRequest.status < 400) {
      callback();
    }
  };
  httpRequest.open(method, url);
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(payload));
};

const backJumping = () => {
  window.location.href = 'file:///C:/Users/Claire_Duan/greenfox/Claire-Duan/week-04/day-5/reddit-frontend/index.html';
};

form.addEventListener('submit', () => {
  this.event.preventDefault();
  if (!title.value || !urlInput.value) {
    return;
  }
  const data = {
    'title': title.value,
    'url': urlInput.value,
  };
  title.value = '';
  urlInput.value = '';
  ajax('POST', URL_POST, backJumping, data);
});
