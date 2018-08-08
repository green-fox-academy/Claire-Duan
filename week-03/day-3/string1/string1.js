function string1(str) {
  if (str.length === 0) {
    return '';
  }
  return (str.substring(0, 1) === 'x') ? `y${string1(str.substring(1))}`
    : str.substring(0, 1) + string1(str.substring(1));
}

console.log(string1('xellowXx'));
