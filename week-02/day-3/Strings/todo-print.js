'use strict';

var todoText = " - Buy milk\n";

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

const textArr = [todoText];
textArr.splice(0, 0, 'My todo:\n');
textArr.push(' - Download games\n');
textArr.push('\t - Diablo');
todoText = textArr.join(' ');
console.log(todoText);
