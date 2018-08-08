function bunnyEars(num) {
  if (num === 1) {
    return 2;
  }
  if (num === 0) {
    return 3;
  }
  return (num % 2 === 0) ? (bunnyEars(num - 1) + bunnyEars(0)) : (bunnyEars(num - 1) + bunnyEars(1));
}

console.log(bunnyEars(6));
