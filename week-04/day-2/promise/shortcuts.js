'use strict';

require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  reject(new Error('REJECTED!!!!!!!!'));
});

function onReject(err) {
  console.log(err.message);
}

promise
  .then(console.log())
  .catch(onReject);


const promiseOn = Promise.reject(new Error('REJECTED AGAIN!!!!!!!'));
promiseOn
  .then(console.log())
  .catch(onReject);
