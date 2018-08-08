'use strict';

function numberAdder(num) {
    if (num === 1) {
        return 1;
    }
    return num + numberAdder(num-1);
}

console.log(numberAdder(5));
