function refactorio(num) {
  if (num === 1) {
    return 1;
  }
  return num * refactorio(num - 1);
}

console.log(refactorio(4));
