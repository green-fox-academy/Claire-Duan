'use strict';

function power(base, n) {
    if (n === 1) {
        return base;
    }
    return base * power(base, n-1);
}

console.log(power(3, 2));
