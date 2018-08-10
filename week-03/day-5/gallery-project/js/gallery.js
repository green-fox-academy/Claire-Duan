const thumbnailContainer = document.querySelector('.thumbnailContainer');
const mainDisplay = document.querySelector('.display');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const imgNum = 8;
let currentIndex = 0;
let currentImg;
let allImgs;

const createThumnailDiv = () => {
  const thumnailDiv = document.createElement('div');
  thumnailDiv.className = 'items';
  return thumnailDiv;
};

const createArrows = () => {
  const arrows = document.createElement('div');
  arrows.className = 'triangle';
  return arrows;
};

const createThumbnailItem = () => {
  const thumbConatiner = document.createElement('div');
  const thumbnail = document.createElement('img');
  thumbConatiner.className = 'thumbnail';
  thumbnail.className = 'thumbnailImg';
  thumbConatiner.appendChild(thumbnail);
  return [thumbConatiner, thumbnail];
};

const initThumbnailItem = () => {
  const thumbnailDiv = createThumnailDiv();
  const arrows = createArrows();
  const thumbnail = createThumbnailItem();
  thumbnailContainer.appendChild(thumbnailDiv);
  thumbnailDiv.appendChild(arrows);
  thumbnailDiv.appendChild(thumbnail[0]);
  return thumbnail[1];
};

const createThumbnails = () => {
  for (let i = 1; i <= imgNum; i++) {
    const thumbnail = initThumbnailItem();
    thumbnail.src = `./images/${i}.jpg`;
    if (i !== 1) {
      thumbnail.parentNode.previousSibling.classList.add('hide');
      thumbnail.parentNode.classList.add('hideDiv');
    }
  }
  allImgs = document.querySelectorAll('.thumbnail');
  currentImg = allImgs[0];
};

const initDisplay = () => {
  mainDisplay.src = document.querySelectorAll('.thumbnailImg')[0].src;
};

const changeImg = () => {
  mainDisplay.src = currentImg.firstChild.src;
};

leftArrow.onclick = () => {
  if (currentIndex === 0) {
    currentIndex = imgNum - 1;
  } else {
    currentIndex--;
  }
  currentImg.previousSibling.classList.add('hide');
  currentImg.parentNode.classList.add('hideDiv');
  currentImg = allImgs[currentIndex];
  currentImg.previousSibling.classList.remove('hide');
  currentImg.parentNode.classList.remove('hideDiv');
  changeImg();
};

rightArrow.onclick = () => {
  if (currentIndex === imgNum - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  currentImg.previousSibling.classList.add('hide');
  currentImg = allImgs[currentIndex];
  currentImg.previousSibling.classList.remove('hide');
  changeImg();
};

thumbnailContainer.addEventListener('click', (event) => {
  const clickedThumbnail = event.target.parentNode.parentNode;
  const clickedIndex = Array.prototype.indexOf.call(thumbnailContainer.children, clickedThumbnail);
  if (clickedIndex >= 0) {
    currentIndex = clickedIndex;
    currentImg.previousSibling.classList.add('hide');
    currentImg = allImgs[currentIndex];
    currentImg.previousSibling.classList.remove('hide');
    changeImg();
  }
});

createThumbnails();
initDisplay();
