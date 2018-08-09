const container = document.querySelector('.container');
const button = document.querySelector('button');
const input = document.querySelector('input');
const searhPath = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
const apiKey = '&api_key=c2a526c71d884e05b9e725b60df5a51a';
// const limit = '&limit=16';

const ajax = (method, url, callback, payload = null) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject.response);
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
  console.log(response);

  response.docs.forEach((article) => {
    const artElement = document.createElement('div');
    const headLine = document.createElement('h1');
    const snippet = document.createElement('p');
    const pubDate = document.createElement('p');
    const permaLink = document.createElement('a');

    headLine.textContent = article.headline.main;
    snippet.textContent = article.snippet;
    pubDate.textContent = `Publication Date: ${article.pub_date}`;
    permaLink.textContent = 'Article Link';
    permaLink.href = article.web_url;
    console.log(article.web_url);


    artElement.appendChild(headLine);
    artElement.appendChild(snippet);
    artElement.appendChild(pubDate);
    artElement.appendChild(permaLink);

    container.appendChild(artElement);
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
    const url = searhPath + query + apiKey;
    ajax('GET', url, resultRenderer);
  }
};
