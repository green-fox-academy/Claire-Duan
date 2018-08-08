function string2(str) {
  if (str.length === 0) {
    return '';
  }
  return (str.substring(0, 1) === 'x') ? string2(str.substring(1))
    : str.substring(0, 1) + string2(str.substring(1));
}

console.log(string2('stxrinxg'));
