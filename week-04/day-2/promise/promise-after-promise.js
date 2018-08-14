'use strict';

require('es6-promise');

first()
  .then(result => second(result)
    .then(resultTwo => resultTwo)
    .then(console.log));
