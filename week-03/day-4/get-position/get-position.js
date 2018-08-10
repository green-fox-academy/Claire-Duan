const map = document.querySelector('iframe');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const input = document.querySelector('input');
const host = 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=';
const mapHost = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyC_SXN0MutxK1Efkq8L4U963EgmU5F8_s4';

const ajax = (method, url, callback, payload = null) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open(method, url);
  httpRequest.setRequestHeader('X-Mashape-Key', 'oSsyrIld7rmshsvYHkQaWhINqSicp1mbazTjsnyrnxArIm7qDc');
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.send(JSON.stringify(payload));
};

const clearDomElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const locationGetter = (response) => {
  clearDomElement(container);
  console.log(response);

  const cityLocation = response.Results[0];
  const cordinate = document.createElement('p');
  cordinate.textContent = `latitude: ${cityLocation.lat}  longitude: ${cityLocation.lon}`;
  container.appendChild(cordinate);
  map.src = `${mapHost}&q=${cityLocation.lat},${cityLocation.lon}`;
};

button.onclick = () => {
  const query = input.value;
  if (input !== '') {
    const url = host + query;
    ajax('GET', url, locationGetter);
  }
};
