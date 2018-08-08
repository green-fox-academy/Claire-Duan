'use strict';

function sumDigit(num) {
    if (num % 10 === 0) {
        return num;
    }
    return num % 10 + sumDigit(Math.floor(num / 10));
}

console.log(sumDigit(1234));
