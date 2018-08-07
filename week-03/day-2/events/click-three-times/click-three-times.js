'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  let counter = 0;
  let afterFiveSecond = false;
  const text = '5 seconds ellapsed and clicked 3 times';

  setTimeout(() => { afterFiveSecond = true; console.log(afterFiveSecond); }, 5000);
  function displayLine() {
    const newElement = document.createElement('p');
    newElement.textContent = text;
    button.parentNode.appendChild(newElement);
  }

  button.onclick = () => {
    counter++;
    if (counter === 3 && afterFiveSecond) {
      displayLine();
      counter = 0;
    } else if (!afterFiveSecond) {
      counter = 0;
    }
  };
});
