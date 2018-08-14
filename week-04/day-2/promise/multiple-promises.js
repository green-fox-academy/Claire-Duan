'use strict';

require('es6-promise');

const all = (promise1, promise2) => {
  const values = [];

  return new Promise(resolve => {
    promise1.then(result => {
      values.push(result);
      return promise2.then(result2 => {
        values.push(result2);
        resolve(values);
      });
    });
  });
};

all(getPromise1(), getPromise2())
  .then(console.log);
