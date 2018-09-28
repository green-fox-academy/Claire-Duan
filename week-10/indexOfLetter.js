'use strict';

function indexOfLetter(str, letter) {
  const indexList = [];
  str.split('').forEach((element, i) => {
    if (element === letter) {
      indexList.push(i);
    }
  });
  return indexList;
}

console.log(indexOfLetter('success', 's'));
