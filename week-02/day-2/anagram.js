const anagram = (str1 = '', str2 = '') => {
  const str1Arr = str1.replace(/[^\w\.\/]/ig, '').split('');
  str1Arr.sort();
  console.log(str1Arr);

  const str2Arr = str2.replace(/[^\w\.\/]/ig, '').split('');
  str2Arr.sort();
  console.log(str2Arr);

  // console.log(str1Arr.toString());
  // console.log(str2Arr.toString());

  return (str1Arr.toString() === str2Arr.toString());
};

console.log(anagram('dog sd', 'god ds'));
console.log(anagram('not', 'to *ny'));
