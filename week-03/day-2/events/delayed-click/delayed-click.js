'use strict';

const button = document.querySelector('button');
const text = '2 seconds ellapsed';

//Method 1
function displayLine() {
  console.log(text);
}

button.onclick = () => {
  setTimeout(displayLine, 2000);
};

//Method 2
// function displayLine() {
//   setTimeout(console.log, 2000, text);
// }

// button.onclick = displayLine;
