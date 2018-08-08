'use strict';

function string1(str) {
  if (str.length === 1) {
    return str;
  }
  return str.substring(0, 1) + '*' + string1(str.substring(1));
}

console.log(string1('string'));
