'use strict';

const button = document.querySelector('button');

//Method 1
// const listen = () => {
//   console.log(Math.floor(Date.now() / 1000));
//   button.removeEventListener('click', listen);
// };
// button.addEventListener('click', listen);

//Method 2
button.onclick = () => {
  console.log(Math.floor(Date.now() / 1000));
  button.disabled = true;
};
