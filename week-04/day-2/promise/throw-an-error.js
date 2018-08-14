'use strict';

require('es6-promise');

const onReject = err => {
  console.log(err.message);
};

const parsePromised = () => new Promise((resolve, reject) => {
  try {
    JSON.parse(process.argv[2]);
    resolve('Success!!!');
  } catch (e) {
    reject(e);
  }
});


parsePromised()
  .then(console.log, onReject);
