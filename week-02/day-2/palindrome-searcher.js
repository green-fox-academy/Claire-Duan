function palindromSearcher (str = '' ) {
  const strArr = str.split('');
  const arrLength = strArr.length;
  const paStr = [];
  for (let i = 0; i < (arrLength - 2); i++) {
    for (let j = arrLength - 1; j > (i + 1); j--) {
      if (strArr[i] === strArr[j]) {
        if (j === i + 2) {
          paStr.push(str.substring(i, j + 1));
        }
        else {
          let same = true;
          for (let k = 1; k < Math.ceil((j - i) / 2); k++) {
            same = strArr[i + k] === strArr[j - k];
            if (!same) {
              break;
            }
          }
          if (same) {
            paStr.push(str.substring(i, j + 1));
          }
        }
      }
    }
  }
  return paStr;
}

console.log(palindromSearcher('dog goat dad duck doodle never'));
console.log(palindromSearcher('racecar'));
