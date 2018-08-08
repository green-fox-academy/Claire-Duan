const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');

const createButton = document.querySelector('.create-candies');
const buyButton = document.querySelector('.buy-lollypops');
const rainButton = document.querySelector('.candy-machine');

let candySpeed = 0;
let candyNum = 0;
let lollyNum = lollypops.textContent.split('').length / 2;

function setCandy(num) {
  candies.textContent = num;
}

function getCandy() {
  return parseInt(candies.textContent, 10);
}

function setLolly() {
  lollypops.textContent = `${lollypops.textContent}🍭`;
}

function getLollyNum() {
  return lollypops.textContent.split('').length / 2;
}

function setSpeed(num) {
  speed.textContent = num;
}

createButton.onclick = () => {
  candyNum = getCandy() + 1;
  setCandy(candyNum);
};

buyButton.onclick = () => {
  candyNum = getCandy();
  if (candyNum >= 100) {
    candyNum -= 100;
    setLolly();
    setCandy(candyNum);
    lollyNum = getLollyNum();
    candySpeed = Math.floor(lollyNum / 10);
    setSpeed(candySpeed);
  } else {
    window.alert('No enough candies!');
  }
};

rainButton.onclick = () => {
  candySpeed *= 10;
  setSpeed(candySpeed);
};

for (let i = 0; i < 2000; i++) {
  createButton.click();
}

setInterval(() => {
  setCandy(getCandy() + candySpeed);
}, 1000);
