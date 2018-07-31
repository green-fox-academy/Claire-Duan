const palindromBuilder = (str = '') => {
  const strArr = str.split('');
  strArr.reverse();

  const newArr = [];
  newArr.push(str);
  strArr.forEach(chars => newArr.push(chars));

  return newArr.join('');
};

console.log(palindromBuilder(''));
console.log(palindromBuilder('greenfox'));
console.log(palindromBuilder('123'));
