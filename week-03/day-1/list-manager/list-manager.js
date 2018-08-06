const firstContainer = document.getElementsByClassName('firstContainer')[0];
const secondContainer = document.getElementsByClassName('secondContainer')[0];
const operator = document.getElementsByClassName('operater')[0];
let left = true;

const leftItems = document.getElementsByClassName('left-items');
let leftPointer = 0;

const rightItems = document.getElementsByClassName('right-items');
let rightPointer = 0;

const items = document.getElementsByClassName('items');
let pointer = 0;

const buttons = document.getElementsByTagName('button');
const upButton = buttons[0];
const moveButton = buttons[1];
const deleteButton = buttons[2];
const downButton = buttons[3];


window.onload = function () {
  function itemClick(i) {
    items[i].onclick = function () {
      pointer = i;
      left = true;
      console.log(i + 'clicked');
    };
  }
  for (let i = 0; i < items.length; i++) {
    itemClick(i);
  }
};

// function rightClick(i) {
//   rightItems[i].onclick = function() {
//     rightPointer = i;
//     left = false;
//   };
// }


// for (let i = 0; i < 4; i++) {
//   rightClick(i);
// }

upButton.onclick = function () {
  if (items[pointer].textContent !== '') {
    if (pointer === 0 || pointer === 4) {
      window.alert('Already the first!');
    } else {
      const tempString = items[pointer - 1].textContent;
      items[pointer - 1].textContent = items[pointer].textContent;
      items[pointer].textContent = tempString;
    }
  } else {
    window.alert('Empty!');
  }
};

downButton.onclick = function () {
  if (items[pointer].textContent !== '') {
    if (pointer === 3 || pointer === 7) {
      window.alert('Already the last!');
    } else {
      const tempString = items[pointer + 1].textContent;
      items[pointer + 1].textContent = items[pointer].textContent;
      items[pointer].textContent = tempString;
    }
  } else {
    window.alert('Empty!');
  }
};

moveButton.onclick = function () {

};
