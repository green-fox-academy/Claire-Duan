'use strict';

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

const divNum = 100;
const section = document.querySelector('section');
let pointer = 0;

function addDiv() {
  for (let i = 1; i <= divNum; i++) {
    const newDiv = document.createElement('div');
    newDiv.textContent = i;
    section.appendChild(newDiv);
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}

addDiv();
const interval = setInterval(setPrime, 100);

function setPrime() {
  if (pointer === divNum) {
    clearInterval(interval);
    console.log('finished');
    return;
  }
  const divs = document.querySelectorAll('div');
  const div = divs[pointer];
  const isPrimeNum = isPrime(parseInt(div.textContent, 10));
  if (isPrimeNum) {
    div.className = 'prime';
  } else {
    div.className = 'not-prime';
  }
  pointer++;
}

