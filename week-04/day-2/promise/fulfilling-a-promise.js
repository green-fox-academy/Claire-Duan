'use strict';

require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  fulfill('FULFILLED!');
});

promise.then(result => {
  setTimeout(() => {
    console.log(result);
  }, 300);
});
