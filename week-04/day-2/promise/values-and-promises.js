'use strict';

require('es6-promise');

const attachTitle = name => `DR. ${name}`;

const promise = new Promise((resolve, reject) => {
  resolve('MANHATTAN');
});

promise
  .then(attachTitle)
  .then(console.log);
