'use strict';

const URL_GET = 'http://52.29.105.35:3000/posts';
const postContainer = document.querySelector('.post-container');
const button = document.querySelector('button');
const UPVOTE = './images/upvote.png';
const DOWNVOTE = './images/downvote.png';

const ajax = (method, url, callback, payload = null) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open(method, url);
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.send(JSON.stringify(payload));
};

ajax('GET', URL_GET, console.log);

const clearDomElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const renderArrow = (direction, src) => {
  const arrow = document.createElement('img');
  arrow.classList.add('vote');
  arrow.classList.add(direction);
  arrow.src = src;
  return arrow;
};

const renderVote = (score) => {
  const voteContainer = document.createElement('div');
  voteContainer.classList.add('vote-container');
  const scoreBox = document.createElement('p');
  scoreBox.classList.add('score');
  scoreBox.textContent = score;
  voteContainer.appendChild(renderArrow('up', UPVOTE));
  voteContainer.appendChild(scoreBox);
  voteContainer.appendChild(renderArrow('down', DOWNVOTE));
  return voteContainer;
};

const renderTitle = (title, url) => {
  const h2 = document.createElement('h2');
  const link = document.createElement('a');
  link.textContent = title;
  link.href = url;
  h2.appendChild(link);
  return h2;
};

const renderTimeAuthor = (timeStamp, author) => {
  const p = document.createElement('p');
  p.textContent = `submitted at ${timeStamp} by `;
  const authorText = document.createElement('strong');
  authorText.textContent = author;
  p.appendChild(authorText);
  return p;
};

const renderContent = (title, url, timeStamp, author = 'anonymous') => {
  const content = document.createElement('div');
  content.classList.add('content');
  const titleBox = renderTitle(title, url);
  const timeAuthor = renderTimeAuthor(timeStamp, author);
  content.appendChild(titleBox);
  content.appendChild(timeAuthor);
  return content;
};

const renderArticle = (response, index) => {
  const article = document.createElement('article');
  article.classList.add('post');
  article.id = `article-${response.id}`;
  const numberBox = document.createElement('div');
  numberBox.classList.add('number');
  numberBox.textContent = index;
  article.appendChild(numberBox);
  article.appendChild(renderVote(response.score));
  article.appendChild(renderContent(response.title, response.url, response.timestamp));
  return article;
};

const renderPosts = (response) => {
  clearDomElement(postContainer);
  response.posts.forEach((post, index) => {
    postContainer.appendChild(renderArticle(post, index + 1));
  });
};

ajax('GET', URL_GET, renderPosts);
button.onclick = () => {
  window.location.href = 'file:///C:/Users/Claire_Duan/greenfox/Claire-Duan/week-04/day-5/reddit-frontend/post.html';
};
