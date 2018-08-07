const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');

const createButton = document.querySelector('.create-candies');
const buyButton = document.querySelector('.buy-lollypops');
const rainButton = document.querySelector('.candy-machine');

// let str = lollypops.textContent;
// console.log(str);
// let a = str.split('');
// console.log(a.slice(0,10));



let candyNum = 0;
let lollyNum = 0;

function setCandy(num) {
  candies.textContent = num;
}

function setLolly() {
  lollypops.textContent.concat(🍭);
}

createButton.onclick = () => {
  candyNum++;
  setCandy(candyNum);
};

buyButton.onclick = () => {
  if (candyNum > 100) {
    candyNum -= 100;
    setLolly();
    setCandy(candyNum);
  } else {
    window.alert('No enough candies!');
  }
};
