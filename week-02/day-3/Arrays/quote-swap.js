'use strict';

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

const words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."];

function quoteSwap(wordList) {
  const doIndex = wordList.indexOf('do');
  const cannotIndex = wordList.indexOf('cannot');

  let temp = wordList[doIndex];
  wordList[doIndex] = 'cannot';
  wordList[cannotIndex] = temp;

  return wordList.join(' ');
}

console.log(quoteSwap(words));

// Expected output: "What I cannot create I do not understand."

module.exports = quoteSwap;
