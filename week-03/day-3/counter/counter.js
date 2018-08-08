'use strict';

function count(num) {
    console.log(num);
    if (num === 0) {
        return;
    }
    count(num-1);
}

count(10);