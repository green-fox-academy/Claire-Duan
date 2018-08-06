const wordList = ['apple', 'banana', 'cat', 'dog'];

//1
const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].textContent = wordList[i];
}

//2
document.getElementsByTagName('ul')[0].setAttribute('style', 'background-color: limegreen;');
