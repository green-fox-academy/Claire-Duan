//  Create a function that takes a list of numbers as parameter

//  Returns a list where the elements are sorted in ascending numerical order

//  Make a second boolean parameter, if it's `true` sort that list descending

function bubble(arr) {
  const comp = (a, b) => (a - b);
  return arr.sort(comp);
}

function advancedBubble(arr, isDescending) {
  if (isDescending) {
    const comp = (a, b) => (b - a);
    arr.sort(comp);
  }
  else {
    const comp = (a, b) => (a - b);
    arr.sort(comp);
  }

  return arr;
}

//  Example:

console.log(bubble([43, 12, 24, 9, 5]));

//  should print [5, 9, 12, 24, 34]

console.log(advancedBubble([43, 12, 24, 9, 5], true));

//  should print [34, 24, 9, 5]
