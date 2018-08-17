'use strict';

const URL = 'http://52.29.105.35:3000/posts';
const postContainer = document.querySelector('.post-container');
const button = document.querySelector('button');
const UPVOTE = './images/upvote.png';
const UPVOTED = './images/upvoted.png';
const DOWNVOTE = './images/downvote.png';
const DOWNVOTED = './images/downvoted.png';
let voteDir = '';

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

ajax('GET', URL, console.log);

const clearDomElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const changeVoteImg = (post) => {
  const article = document.querySelector(`#article-${post[0].id}`);
  const arrowParent = article.children[1];
  if (voteDir === 'up') {
    arrowParent.children[0].src = UPVOTED;
    arrowParent.children[1].textContent = parseInt(arrowParent.children[1].textContent, 10) + 1;
  } else {
    arrowParent.children[2].src = DOWNVOTED;
    arrowParent.children[1].textContent = parseInt(arrowParent.children[1].textContent, 10) - 1;
  }
};

const addVoteListner = (arrow, post, direction) => {
  const vote = (direction === 'up') ? 1 : -1;
  const fix = (direction === 'up') ? `/${post.id}/upvote` : `/${post.id}/downvote`;
  arrow.addEventListener('click', () => {
    post.vote = vote;
    voteDir = direction;
    ajax('PUT', URL + fix, changeVoteImg, post);
  });
};

const renderArrow = (direction, src, post) => {
  const arrow = document.createElement('img');
  arrow.classList.add('vote');
  arrow.classList.add(direction);
  arrow.src = src;
  addVoteListner(arrow, post, direction);
  return arrow;
};

const renderVote = (post) => {
  const voteContainer = document.createElement('div');
  voteContainer.classList.add('vote-container');
  const scoreBox = document.createElement('p');
  scoreBox.classList.add('score');
  scoreBox.textContent = post.score;
  voteContainer.appendChild(renderArrow('up', UPVOTE, post));
  voteContainer.appendChild(scoreBox);
  voteContainer.appendChild(renderArrow('down', DOWNVOTE, post));
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

const renderArticle = (post, index) => {
  const article = document.createElement('article');
  article.classList.add('post');
  article.id = `article-${post.id}`;
  const numberBox = document.createElement('div');
  numberBox.classList.add('number');
  numberBox.textContent = index;
  article.appendChild(numberBox);
  article.appendChild(renderVote(post));
  article.appendChild(renderContent(post.title, post.url, post.timestamp));
  return article;
};

const renderPosts = (response) => {
  clearDomElement(postContainer);
  response.posts.forEach((post, index) => {
    postContainer.appendChild(renderArticle(post, index + 1));
  });
};

ajax('GET', URL, renderPosts);
button.onclick = () => {
  window.location.href = 'file:///C:/Users/Claire_Duan/greenfox/Claire-Duan/week-04/day-5/reddit-frontend/post.html';
};
