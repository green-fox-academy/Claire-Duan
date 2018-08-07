'use strict';

const image = document.querySelector('.img-inspector');
const navigation = document.querySelector('nav');
image.style.backgroundPositionX = '0';
image.style.backgroundPositionY = '0';
image.style.backgroundSize = '200%';

navigation.addEventListener('click', (event) => {
  const button = event.target;
  if (button.dataset.action === 'move') {
    switch (button.dataset.direction) {
      case 'up':
        image.style.backgroundPositionY = `${parseInt(image.style.backgroundPositionY, 10) - 10}px`;
        break;
      case 'down':
        image.style.backgroundPositionY = `${parseInt(image.style.backgroundPositionY, 10) + 10}px`;
        break;
      case 'left':
        image.style.backgroundPositionX = `${parseInt(image.style.backgroundPositionX, 10) - 10}px`;
        break;
      case 'right':
        image.style.backgroundPositionX = `${parseInt(image.style.backgroundPositionX, 10) + 10}px`;
        break;
      default:
        break;
    }
  }
});

navigation.addEventListener('click', (event) => {
  const button = event.target;
  if (button.dataset.action === 'zoom') {
    switch (button.dataset.direction) {
      case 'in':
        image.style.backgroundSize = `${(parseFloat(image.style.backgroundSize, 10) + 20)}%`;
        break;
      case 'out':
        image.style.backgroundSize = `${(parseFloat(image.style.backgroundSize, 10) - 20)}%`;
        break;
      default:
        break;
    }
  }
});
