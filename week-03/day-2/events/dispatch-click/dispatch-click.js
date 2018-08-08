'use strict';

document.querySelector('div').addEventListener('click', (event) => {
  event.target.innerText = 'Yeah, click event is fired!';
});

document.querySelector('button').onclick = () => {
  document.querySelector('div').click();
};
