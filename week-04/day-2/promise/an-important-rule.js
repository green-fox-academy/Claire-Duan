'use strict';

require('es6-promise');

const ITR = 10;

const alwaysThrow = () => {
  throw new Error('OH NOES');
};

const iterate = (num) => {
  console.log(num);
  return num + 1;
};

const onReject = err => {
  console.log(err.message);
};

// Promise.resolve(1)
//   .then(result => {
//     for (let i = 0; i < ITR; i++) {
//       if (i === 5) {
//         alwaysThrow();
//       }
//       result = iterate(result);
//     }
//   })
//   .catch(onReject);

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrow)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(onReject);
