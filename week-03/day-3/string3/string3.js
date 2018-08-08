'use strict';

function string3(str) {
  if (str.length === 1) {
    return str;
  }
  return `${str.substring(0, 1)}*${string3(str.substring(1))}`;
}

console.log(string3('string'));
