'use strict';

const apple = function () {
  console.log('apple');
};
const pear = function () {
  console.log('pear');
};
const melon = function () {
  console.log('melon');
};
const grapes = function () {
  console.log('grapes');
};

setTimeout(grapes, 5000);
setTimeout(melon, 3000);
setTimeout(pear, 1000);
apple();
